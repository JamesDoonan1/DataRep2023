import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PianoItem(props) {


    return (
        <div>
            <Card>
                <Card.Header>{props.myPiano.state}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myPiano.image}></img>
                        <footer>
                            {props.myPiano.brand

                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/" + props.myPiano._id} className='btn btn-primary'>Edit</Link>
            </Card>

        </div>
    );
}
export default PianoItem;