import { Link } from "react-router-dom";
import logo from '../logo.svg';

function SingleRelatedProduct({ product }) {
  return (
    /* Product Box */
    <div className="col-4 offset-4 mb-4">
      <div className="card">
        <Link to={`/products/${product.title}/${product.id}`}>
          <img src={product.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/products/${product.title}/${product.id}`}>
              {product.title}
            </Link>
          </h4>
          <h5 className="card-title text-muted">{product.price}</h5>
        </div>

        <div className="card-footer">
          <button title="Add to Cart" className="btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus fa-2x"></i>
          </button>
          <button
            title="Add to Wishlist"
            className="btn btn-danger btn-sm ms-2"
          >
            <i className="fa fa-heart fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
    /* Product Box End */
  );
}

export default SingleRelatedProduct;
