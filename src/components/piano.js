import PianoItem from "./pianoItem";

function Piano(props){
    return props.myPiano.map(
        (piano) => {
            return <PianoItem myPiano={piano} key={piano._id} Reload={props.ReloadData} handleDelete={() => props.handleDelete(piano._id)}></PianoItem>
        }
    );
}

export default Piano;