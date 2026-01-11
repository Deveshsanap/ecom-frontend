import { useEffect, useState } from "react";
import Counter from "./counter";

const CartProductCard = (props) => {

    const [subTotal,setSubTotal] = useState(0)
    const [count,setCount] = useState(1)

    useEffect(()=>{
        setSubTotal(count * props.product.mrp)
    },[count])

    return(
        <div className="card p-4 my-2 align-items-center">
            <div className="row">
                <div className="col">
                    <img src="" style={{ height: "100px", width: "100px" }} />
                </div>
                <div className="col">
                    <h4>{props.product.name}</h4>
                    <p>{props.product.description}</p>
                    <button className="btn btn-outline-danger">Remove</button>
                </div>
                <div className="col">
                    {<Counter count={count} setCount={setCount}/>}
                </div>
                <div className="col">
                    <h4>₹ {subTotal}</h4>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;