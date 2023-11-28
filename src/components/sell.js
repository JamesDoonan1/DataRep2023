import { useState } from "react";
import axios from "axios";



function Sell() {
    const [state, setState] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("New or Used: " + state +
            " Piano Brand: " + brand +
            " Image: " + image + " Price: " + price);

        const piano = {
            state: state,
            brand: brand,
            image: image,
            price: price
        };

        axios.post('http://localhost:3000/api/piano', piano)
        .then(response => {
            console.log('Piano added successfully:', response.data);
            // You can perform additional actions here if needed
        })
          
        .catch((error) => console.error('Error submitting piano:', error));
    }
    

    return (
        <div>

            <h2>Please enter your Piano details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Piano status. New or Used: </label>
                    <input type="text"
                        className="form-control"
                        value={state}
                        onChange={(e) => { setState(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Piano Brand i.e Yamaha: </label>
                    <input type="text"
                        className="form-control"
                        value={brand}
                        onChange={(e) => { setBrand(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Piano Photo </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Piano Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                        value="Add Piano">
                    </input>
                </div>
            </form>
        </div>
    );
};
export default Sell;
