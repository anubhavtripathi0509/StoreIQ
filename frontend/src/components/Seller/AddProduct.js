import SellerSidebar from "./Sidebar";
import { useState } from "react";

function AddProduct() {
    const [Productdata, setProductdata] = useState({
        'category': "",
        'vendor': "",
        'title': "",
        'slug': "",
        'detail': "",
        'price': "",
        'usd_price': "",
        'tags': "",
        'status': "",
    });

    const inputHandler = (e) => {
        // setProductdata({...Productdata, [e.target.name]: e.target.value});
    }

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
                    <input type="text" name="title" className="form-control" placeholder="Enter Product Name"/>
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
                    <select className="form-control" name="category" onChange={inputHandler}>
                        <option value="python">Category 1</option>
                        <option value="php">Category 2</option>
                        <option value="js">Category 3</option>
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
