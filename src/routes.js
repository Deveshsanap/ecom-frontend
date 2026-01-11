import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import ProductListing from "./pages/productlisting";
import Cart from "./pages/cart";
import BaseTemplate from "./components/templates/base";
import ProductDetailPage from "./pages/productdetailpage";
import LoginPage from "./pages/Login";

const router=createBrowserRouter([
    {
        path:"/",
        element:<BaseTemplate/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"product",
                element:<ProductListing/>
            },
            {
                path:"cart",
                element:<Cart/>
            }
        ]
    },
    {path:"/login",element:<LoginPage/>},
    {path:"/detail",element:<ProductDetailPage/>}
])

export default router;