import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SingleCategory from './SingleCategory';

function Categories() {
    return (
      /* Popular Categories */
      <div className="row m-4">
        <h3 className="mb-4">All Categories</h3>
        <div className="row mb-4">
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
            <SingleCategory title="Python"/>
        </div>

            {/* Pagination */}
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                    <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
      </div>
      
      /* End Popular Categories */
    );
  }
  
  export default Categories;
  