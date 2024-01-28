import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function SingleProduct(props){
    return(
        /* Product Box */
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
          <Link to="/products/python-timer/1"><img src={logo} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            {/* <h4 className="card-title"><Link to='/category/python/1/python-timer-script/1'>{props.title}</Link></h4> */}
            <h4 className="card-title"><Link to='/products/python-timer-script/1'>{props.product.title}</Link></h4>
            <h5 className="card-title text-muted">{props.product.price}</h5>
          </div>

          <div className="card-footer">
            <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus fa-2x"></i></button>
            <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i className="fa fa-heart fa-2x"></i></button>
          </div>

        </div>
      </div>
      /* Product Box End */
    );
}

export default SingleProduct;