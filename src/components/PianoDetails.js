// PianoDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Piano from "./piano";

const PianoDetails = () => {
    const [data, setPianoDetails] = useState([]);

    useEffect(() => {
        // Fetch piano details from the API
        // axios.get(`http://localhost:4000/api/piano`)
        //     .then(response => {
        //         setPianoDetails(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching piano details:', error);
        //     });
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/piano`);
            setPianoDetails(response.data);
        } catch (error) {
            console.error('Error fetching piano details:', error);
        }
    };

    // const Reload = (e) => {
    //     axios.get(`http://localhost:4000/api/piano`)
    //         .then(response => {
    //             setPianoDetails(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching piano details:', error);
    //         });
    // }

    const ReloadData = async () => {
        await fetchData();
    };
 
    return (
        <div>
            <h2>List of Pianos for sale!</h2>
            <Piano myPiano={data} ReloadData={ReloadData}></Piano>
        </div>
    );
};

export default PianoDetails;