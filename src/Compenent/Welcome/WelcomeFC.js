// ---------------------------------------------PROPS / USE STATE /----------------------------------------------------------------------------------------------------------------------------------------------------
import { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeFC(props) {
    let [counter , setCounter] = useState(0)
    const Increase =()=>{
        setCounter(counter + 1)
    }

    useEffect(() =>{
        setCounter(counter);    
    })

    return(
        <div>
            <h1>Hello , {props.name}</h1>
            <p>your age is : {props.age}</p>
            <p>your title is : {props.title}</p>
            <h1> {counter} </h1>
            <btn className="btn btn-primary"  role="button" 
            onClick={Increase}
            >+</btn>
        </div>
    )
}
export default WelcomeFC;

