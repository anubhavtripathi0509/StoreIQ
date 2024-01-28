import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import SellerSidebar from "./Sidebar";

function AddProduct() {
    return (
        <div className="container mt-4">
        <div className="row">
            <SellerSidebar/>
            <div className="col-md-8 col-12 mb-2">
            <div className="card">
                <div className="card-header">
                <h4 className="card-title">Add Product</h4>
                </div>
                <div className="card-body">
                <form>
                    <div className="form-group mb-3">
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="Enter Product Name"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Price</label>
                    <input type="text" className="form-control" placeholder="Enter Product Price"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Description</label>
                    <textarea className="form-control" rows="4" placeholder="Enter Product Description"></textarea>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Image</label>
                    <input type="file" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Category</label>
                    <select className="form-control">
                        <option>Select Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                    </select>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Status</label>
                    <select className="form-control">
                        <option>Select Status</option>
                        <option>Publish</option>
                        <option>Draft</option>
                    </select>
                    </div>
                    <div className="form-group mb-3">
                    <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default AddProduct;
