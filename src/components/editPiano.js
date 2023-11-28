import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Edit(props) {

    let { id } = useParams();

    const [state, setState] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:3000/api/piano/' + id)
            .then((response) => {

                // Assign Response data to the arrays using useState.
                setState(response.data.state);
                setBrand(response.data.brand);
                setImage(response.data.image);
                setPrice(response.data.price);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPiano = {
            id: id,
            state: state,
            brand: brand,
            image: image,
            price: price
        };
        axios.put('http://localhost:3000/api/piano/' + id, newPiano)
            .then((res) => {
                console.log(res.data);
                navigate('/View Pianos');
            });
    }

    return (
        <div>

            <h2>Please Edit your Piano details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Piano status. New or Used: </label>
                    <input type="text"
                        className="form-control"
                        value={state}
                        onChange={(e) => { setState(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Brand i.e Yamaha: </label>
                    <input type="text"
                        className="form-control"
                        value={brand}
                        onChange={(e) => { setBrand(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Piano Photo </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Piano Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                        value="Edit Piano" className="btn btn-primary">
                    </input>
                </div>
            </form>
        </div>
    );
}

