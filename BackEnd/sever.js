const express = require('express')
const app = express()
const port = 3000
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

app.post('/api/piano', (req,res)=>{
    console.log(req.body);
    
    pianoModel.create({
      state:req.body.state,
      brand:req.body.brand,
      image:req.body.image,
      price:req.body.price
    })
    
    .then(()=>{ res.send("Piano Add Created")})
    .catch(()=>{ res.send("Piano Add NOT Created")});

})

app.get('/api/piano', async(req, res)=>{
    
    let piano = await pianoModel.find({});
    res.json(piano);
  })

  app.get('/api/piano/:identifier',async (req,res)=>{
    console.log(req.params.identifier);
  
    let piano = await pianoModel.findById(req.params.identifier);
    res.send(piano);
  })

  //// Define a route to handle updates for a specific book by its ID
  app.put('/api/piano/:id', async (req,res)=>{
    console.log("Update " +req.params.id);
    let piano = await pianoModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.send(piano);
  })

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});