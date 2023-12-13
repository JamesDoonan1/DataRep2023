import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PianoItem(props) {
    return (
        <div>
            <Card>
                <Card.Header>{props.myPiano.state}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myPiano.image} alt={props.myPiano.brand}></img>
                        <footer>
                            {props.myPiano.brand}
                            <br></br>
                            {props.myPiano.price}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/" + props.myPiano._id} className='btn btn-primary'>Edit</Link>
                <Button variant="danger" onClick={props.handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

export default PianoItem;