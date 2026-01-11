import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import SearchProductCard from "./searchproductcard";

const Titlebar = () => {
      const SearchMenu = useRef(null)
        const [products, setproducts] = useState([])
        const [inputvalue, setinputvalue] = useState("")
        useEffect(() => {
            fetch('https://dummyjson.com/products/search?q='+inputvalue)
                .then(res => res.json())
                .then(res=>{
                    setproducts(res.products)
                });
        }, [inputvalue])
        const HandleOnChange = (event) => {
            setinputvalue(event.target.value);
    
            if (event.target.value.length>0) {
                SearchMenu.current.className = "d-block"
            } else {
                SearchMenu.current.className = "d-none"
            }
        }
    return ( 
        <div className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <h2>Ecom</h2>
                <div className="w-50 position-relative">
                    <input type="text" onChange={HandleOnChange} placeholder="search products here" className="form-control  mx-auto" value={inputvalue} />
                    <div ref={SearchMenu} className="d-none" style={{ zIndex: "3", position: "absolute", width: "100%",maxHeight:"50vh",overflow:"scroll",overflowX:"hidden"}} >
                        {products.map((p)=><SearchProductCard product={p}/>)}
                    </div>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link">Whishlist</Link></li>
                    <li className="nav-item"><Link className="nav-link">Account</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={"/cart"}>Cart</Link></li>
                    
                </ul>
            </div>
        </div>
     );
}
 
export default Titlebar;