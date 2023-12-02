import{ React} from "react";
import HOC from "./HOC";
const B=(props)=>{
    console.log(props)
  return (
    <div>
       {props.data}
       <button onMouseOver={props.abc}>Incre</button>      
    </div>
  )
}
export default HOC(B)