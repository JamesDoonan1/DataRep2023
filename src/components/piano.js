import PianoItem from "./pianoItem";

function Piano(props){

    return props.myPiano.map(
        (piano)=>{
            return <PianoItem myPiano={piano} key={piano._id} Reload={()=>{props.ReloadData();}}></PianoItem>
        }
    );

}

export default Piano;