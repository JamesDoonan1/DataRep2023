import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Piano from "./piano";
import { useNavigate } from 'react-router-dom';

const PianoDetails = () => {
    const [data, setPianoDetails] = useState([]);
    const [filterBrand, setFilterBrand] = useState('');
    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        console.log('Fetching data...');
        try {
            const response = await axios.get(`http://localhost:4000/api/piano`, {
                params: {
                    brand: filterBrand,
                },
            });

            // Apply filtering based on filterBrand
            let filteredData = response.data;

            if (filterBrand) {
                // Filter by brand
                filteredData = filteredData.filter(piano => piano.brand === filterBrand);
            }

            setPianoDetails(filteredData);
        } catch (error) {
            console.error('Error fetching piano details:', error);
        }
    }, [filterBrand]);

    useEffect(() => {
        // Fetch piano details from the API
        fetchData();
    }, [fetchData]);

    const getBrandOptions = () => {
        const uniqueBrands = [...new Set(data.map(piano => piano.brand))];
        return uniqueBrands.map(brand => <option key={brand} value={brand}>{brand}</option>);
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

    const handleApplyFilters = async () => {
        // Reset search and filter options
        await fetchData();

    };

    return (
        <div>
            <h2>List of Pianos for sale!</h2>
            <div>
                <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
                    <option value="">Filter by Brand</option>
                    {getBrandOptions()}
                </select>
                <button onClick={handleApplyFilters}>Apply Filters</button>
            </div>
            <Piano myPiano={data} ReloadData={ReloadData} handleDelete={handleDelete}></Piano>
        </div>
    );
};

export default PianoDetails;
