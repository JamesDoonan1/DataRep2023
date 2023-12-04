import PianoItem from "./pianoItem";

function Piano(props){

    return props.myPiano.map(
        (piano)=>{
            return <PianoItem myPiano={piano} key={piano._id} reload={()=>{props.Reload();}}></PianoItem>
        }
    );

}

export default Piano;