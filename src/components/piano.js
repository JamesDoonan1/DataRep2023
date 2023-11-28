import PianoItem from "./pianoItem";

function Piano(props){

    return props.myPiano.map(
        (piano)=>{
            return <PianoItem myPiano={piano} key={piano._id}></PianoItem>
        }
    );

}

export default Piano;