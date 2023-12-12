const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://james:james@cluster1.thbzjrh.mongodb.net/DATAREP2023');

}

const PianoSchema = new mongoose.Schema({
  state: String,
  brand: String,
  image: String,
  price: String
})

const pianoModel = mongoose.model('my_pianos', PianoSchema);

app.delete('/api/piano/:id', async (req, res) => {
   console.log('delete' + req.params.id);
  // Use the Mongoose model to find and delete a book by its ID
  // This is non-blocking code, as it uses 'await' with an asynchronous operation
  // let piano = await pianoModel.findByIdAndDelete(req.params.id);
  // res.send(piano);

  try {
    const pianoId = req.params.id;

    // Check if the piano with the given ID exists in your database
    const piano = await pianoModel.findById(pianoId);

    if (!piano) {
      // If the piano is not found, return a 404 response
      return res.status(404).send('Piano not found');
    }

    // Delete the piano from the database
    await pianoModel.findByIdAndDelete(pianoId);

    // Respond with a success message or any relevant data
    res.status(200).json({ message: 'Piano deleted successfully' });
  } catch (error) {
    console.error('Error deleting piano:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/piano', (req, res) => {
  console.log(req.body);

  pianoModel.create({
    state: req.body.state,
    brand: req.body.brand,
    image: req.body.image,
    price: req.body.price
  })

    .then(() => { res.send("Piano Add Created") })
    .catch(() => { res.send("Piano Add NOT Created") });
})

app.get('/api/piano', async (req, res) => {
  console.log('Received GET request to /api/piano');
  try {
    let piano = await pianoModel.find({});
    res.json(piano);
  } catch (error) {
    console.error('Error fetching pianos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/api/piano/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  let piano = await pianoModel.findById(req.params.identifier);
  res.send(piano);
})

//// Define a route to handle updates for a specific book by its ID
app.put('/api/piano/:id', async (req, res) => {
  console.log("Update " + req.params.id);
  let piano = await pianoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(piano);
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});