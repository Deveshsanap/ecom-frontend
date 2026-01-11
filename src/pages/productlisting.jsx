import data from "../data/data.json"
import ProductCard from "../components/productcard";
import Navbar from "../components/navbar";
import Titlebar from "../components/titlebar";
import CategorySideNav from "../components/category/categorysidenav";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
const ProductListing = () => {
    const [searchparams] = useSearchParams()
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/'+searchparams.get("category"))
            .then(res => res.json())
            .then(res=> 
                setproducts(res.products)
            );
    }, [searchparams])
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <CategorySideNav/>
                </div>
                <div className="col-10">{products.map((p)=>(<ProductCard product={p}/>))}</div>

            </div>
        </div>

    </>
    );
}

export default ProductListing;




