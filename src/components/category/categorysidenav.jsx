import { Link } from "react-router";
import data from "../../data/data.json"
import { useEffect, useState } from "react";
const CategorySideNav = () => {
    const [categorylist, setcategorylistt] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(res =>
                setcategorylistt(res)
            );

    }, [])

    return (
       
            <ul class="list-group mt-4 w-100">
                {categorylist.map(c => ( <Link className="text-decoration-none" to={'/product?category='+c}><li class="list-group-item">{c}</li> </Link>))}
            </ul>
       
    );
}

export default CategorySideNav;