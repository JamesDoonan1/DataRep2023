import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PianoItem(props) {
    return (
        <div>
            <Card>
                <Card.Header>{props.myPiano.state}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myPiano.image} alt={props.myPiano.brand}></img>
                        <footer>
                            {props.myPiano.brand

                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/" + props.myPiano._id} className='btn btn-primary'>Edit</Link>
                <Button variant="danger" onClick={
                    (e) => {
                        console.log('Deleting piano with ID:', props.myPiano._id);
                        
                        // Send a DELETE request to the API when the Delete button is clicked
                        axios.delete('http://localhost:4000/api/piano/' + props.myPiano._id)
                            .then((res) => {
                                // Reload the data after successful deletion
                                props.ReloadData();
                            })
                            .catch(error => {
                                console.error('Error deleting piano with ID ' + props.myPiano._id + ':', error);

                                // Check if the error response contains more information
                                if (error.response) {
                                    console.error('Error response data:', error.response.data);
                                    console.error('Error response status:', error.response.status);
                                }

                                // If the server did not respond at all
                                if (!error.response && error.request) {
                                    console.error('No response received from the server.');
                                }

                                // If there was an error setting up the request
                                console.error('Error setting up the request:', error.config);
                            });
                    }
                }>Delete</Button></Card>

        </div>
    );
}
export default PianoItem;