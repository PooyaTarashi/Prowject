import { Link } from "react-router-dom";
import bike from '../icons_assets/bike.svg'

const ProductCard = ({ name, image, price, description }) => {

    return (
        <div className="product-card">
            <img className="product-card-image" src={ image } height={175} />
            <div className="product-heading">
                <h3>{ name }</h3>
                <p style={{ color: '#ee9972' }}>{ price }</p>
            </div>
            <p className="product-description">{ description }</p>

            <Link to="/order-online">
                <div className="card-order-btn">
                    <h4>Order Now!</h4>
                    <img className="motorcycle" src={ bike } height={25} />
                </div>
            </Link>
        </div>
    );
}


export default ProductCard;