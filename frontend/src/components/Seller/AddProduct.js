import SellerSidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function AddProduct() {
    const baseURL = "http://127.0.0.1:8000/api";
    const [categoryData, setCategoryData] = useState([]);
    const seller_id = localStorage.getItem('seller_username');
    const [Productdata, setProductdata] = useState({
        'vendor': seller_id,
        'category': "",
        'title': "",
        'slug': "",
        'details': "",
        'price': "",
        'usd_price': "",
        'tag_list': "",
        'image': "",
        'demo_url': "",
        'product_file': "",
        'status': "",
    });

    const inputHandler = (e) => {
        setProductdata({...Productdata, [e.target.name]: e.target.value});

    };

    const fileHandler = (e) => {
        setProductdata({...Productdata, [e.target.name]: e.target.files[0]});
    };

    useEffect(() => {
        fetchData(baseURL+'/categories/');
    }, []);

    function fetchData(baseurl){
        fetch(baseurl)
        .then(response => response.json())
        .then(data => {
            setCategoryData(data.results);
            // console.log(categoryData);
        });
    }

    const submitHandler = (e) => {
        console.log(Productdata);
        // e.preventDefault();
        const formData = new FormData();
        formData.append('vendor', Productdata.vendor);
        formData.append('category', Productdata.category);
        formData.append('title', Productdata.title);
        formData.append('slug', Productdata.slug);
        formData.append('details', Productdata.details);
        formData.append('price', Productdata.price);
        formData.append('usd_price', Productdata.usd_price);
        formData.append('tag_list', Productdata.tags);
        formData.append('image', Productdata.image);
        formData.append('demo_url', Productdata.demo_url);
        formData.append('product_file', Productdata.product_file);
        formData.append('status', Productdata.status);
        
        axios.post(baseURL+'/products/', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(response => {
            if(response.status===201){
                alert("Product not added");
            }
            else{
                setProductdata({
                    'vendor': seller_id,
                    'category': "",
                    'title': "",
                    'slug': "",
                    'details': "",
                    'price': "",
                    'usd_price': "",
                    'tag_list': "",
                    'image': "",
                    'demo_url': "",
                    'product_file': "",
                    'status': "",
                });
                alert("Product added successfully");
            }
        })
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
                    <input type="text" name="title" value={Productdata.title} onChange={inputHandler} className="form-control" placeholder="Enter Product Name"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Slug</label>
                    <input type="text" name="slug" value={Productdata.slug} onChange={inputHandler} className="form-control" placeholder="Enter Product Slug"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Category</label>
                    <select className="form-control" name="category" onChange={inputHandler}>
                        {
                            categoryData.map((category) => {
                                return <option value={category.id}>{category.title}</option>
                            })                            
                        }
                    </select>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Price</label>
                    <input type="text" name="price" value={Productdata.price} onChange={inputHandler} className="form-control" placeholder="Enter Product Price"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product USD Price</label>
                    <input type="text" name="usd_price" value={Productdata.usd_price} onChange={inputHandler} className="form-control" placeholder="Enter Product USD Price"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Description</label>
                    <textarea className="form-control" name="details" value={Productdata.details} onChange={inputHandler} rows="4" placeholder="Enter Product Description"></textarea>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product Tags</label>
                    <textarea className="form-control" name="tag_list" value={Productdata.tag_list} onChange={inputHandler} rows="4" placeholder="Enter Product Tags"></textarea>
                    </div>
                    <div className="form-group mb-3">
                    <label>Demo URL</label>
                    <input type="text" name="demo_url" value={Productdata.demo_url} onChange={inputHandler} className="form-control" placeholder="Enter Product USD Price"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Featured Image</label>
                    <input type="file" name="image" onChange={fileHandler} className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                    <label>Product File</label>
                    <input type="file" name="product_file" onChange={fileHandler} className="form-control"/>
                    </div>
                    {/* <div className="form-group mb-3">
                    <label>Product Status</label>
                    <select className="form-control" name="status" onChange={inputHandler}>
                        <option>Select Status</option>
                        <option>Publish</option>
                        <option>Draft</option>
                    </select>
                    </div> */}
                    <div className="form-group mb-3">
                    <button className="btn btn-primary" onClick={submitHandler}>Add Product</button>
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