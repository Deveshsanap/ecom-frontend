import { useState } from "react";

const Counter = ({count,setCount}) => {


    return ( 
        <div className="d-flex py-2" style={{minWidth:"15%"}}>
            <button className="btn btn-light" onClick={() =>{if(count > 0) setCount(count-1)}}>-</button>
            <input className="form-control text-center" type="text" value={count} readOnly />
            <button className="btn btn-light" onClick={() =>{setCount(count+1)}}>+</button>
        </div>
     );
}

export default Counter;