import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Categories() {
    return (
      /* Popular Categories */
      <div className="row m-4">
        <h3 className="mb-4">All Categories</h3>
        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}

        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}

        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}

        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}
        
        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}

        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}

        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}

        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title"><Link to='/'>Category title</Link></h4>
            </div>
            <div className="card-footer">
                Product Downloads:2356
            </div>
          </div>
        </div>
        {/* Category Box End */}
      </div>
      
      /* End Popular Categories */
    );
  }
  
  export default Categories;
  