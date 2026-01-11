const BannerProductCard = (props) => {
    return ( <div className="col-3 ">
                            <div className="card border-0 shadow" >
                                <img className="" src={props.product.image_url} alt="" />
                                <div className="card-body">
                                    <h4 className="text-center">{props.product.name}</h4>
                                </div>
                            </div>
                        </div> );
}

export default BannerProductCard;