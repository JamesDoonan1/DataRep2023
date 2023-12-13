import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Piano from "./piano";
import { useNavigate } from 'react-router-dom';

const PianoDetails = () => {
    const [data, setPianoDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch piano details from the API
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

    const ReloadData = async () => {
        await fetchData();
    };

    const handleDelete = async (pianoId) => {
        try {
            await axios.delete(`http://localhost:4000/api/piano/${pianoId}`);
            await ReloadData();
            navigate('/PianoDetails'); // Navigates back to PianoDetails

        } catch (error) {
            console.error('Error deleting piano: ' + error);
        }
    };
 
    return (
        <div>
            <h2>List of Pianos for sale!</h2>
            <Piano myPiano={data} ReloadData={ReloadData} handleDelete={handleDelete}></Piano>
        </div>
    );
};

export default PianoDetails;