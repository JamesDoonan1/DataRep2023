import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sell() {
    const [state, setState] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
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

        try {
            await axios.post('http://localhost:4000/api/piano', piano);
            console.log('Piano added successfully');

            // Navigate to the home page after successful piano addition
            navigate('/');
        } catch (error) {
            console.error('Error submitting piano:', error)

        }
    }

    return (
        <div>
            <h2>Please enter your Piano details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Piano status. New or Used: </label>
                    <select
                        className="form-control"
                        value={state}
                        onChange={(e) => { setState(e.target.value) }}
                    >
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
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