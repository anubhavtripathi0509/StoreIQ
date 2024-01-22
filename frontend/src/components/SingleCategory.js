import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function SingleCategory(props){
    return(
        /* Category Box */
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <Link to="/category/python/1"><img src={logo} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h4 className="card-title"><Link to='/category/python/1'>{props.title}</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        /* Category Box End */
    );
}

export default SingleCategory;