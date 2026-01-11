const BannerSlider = () => {
    return ( 
        <div className="container  overflow-hidden pt-4 position-relative" style={{height:"75vh"}}>
            <div className="carousel slide" id="banner-slider" data-bs-ride="carousel">
                <div className="carousel-indicators position-absolute "style={{bottom:"30%"}}>
                    <button className="active" data-bs-target="#banner-slider" data-bs-slide-to="0"></button>
                    <button className="" data-bs-target="#banner-slider" data-bs-slide-to="1"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img className="img-fluid w-100" src="https://graphicsfamily.com/wp-content/uploads/edd/2022/12/E-commerce-Product-Banner-Design-scaled.jpg" alt="" />
                    </div>
                    <div className="carousel-item " >
                        <img className="img-fluid w-100" src="https://graphicsfamily.com/wp-content/uploads/edd/2023/06/E-commerce-Website-Product-Banner-Design-scaled.jpg" alt="" />
                        <div className="carousel-caption "style={{bottom:"35%"}}>
                            <h3>Click me</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
     );
}
 
export default BannerSlider;