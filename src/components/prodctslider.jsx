import data from "../data/data.json"
import BannerProductCard from "./bannerproductcard";

const ProductSlider = () => {
    const noOfItems = Math.ceil(data.prodcuts.length / 4);
    var carouselItem = []
    for (var i = 0; i < noOfItems; i++) {
        var classList = "carousel-item";
        if (i == 0) {
            classList = "carousel-item active"
        }
        carouselItem.push(<div className={classList}>
            <div className="row" >

                {data.prodcuts.slice(4 * i, 4 + (4 * i)).map((p) => <BannerProductCard product={p} />)}
            </div>
        </div>)


    }
    return (<div className="container">
        <div className="carousel slide" id="product-slider" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselItem.map(item => item)}
                <button class="carousel-control-prev" type="button" data-bs-target="#product-slider" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#product-slider" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>);
}

export default ProductSlider;