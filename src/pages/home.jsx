import BannerSlider from "../components/bannerslider";
import CategoryBar from "../components/category/categorybar";
import CategoryMegaMenu from "../components/category/categorymegamenu";
import CategorySideNav from "../components/category/categorysidenav";
import Navbar from "../components/navbar";
import ProductSlider from "../components/prodctslider";
import Titlebar from "../components/titlebar";
import ProductDetailPage from "./productdetailpage";

const Home = () => {
    
    return (<>
       
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <CategorySideNav />
                </div>
                <div className="col-9">
                    {/* <Navbar />
                    <CategoryMegaMenu/>
                    <CategoryBar /> */}
                    {/*<CategoryBar/>
                    <HeroBanerSlider/> */}
                    <BannerSlider />
                    <ProductSlider />
                    
                </div>
            </div>
        </div>
    </>);
}

export default Home;