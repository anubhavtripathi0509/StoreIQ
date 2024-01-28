import SellerSidebar from "./Sidebar";
import { Link } from "react-router-dom";

function SellerReports() {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        {/* Total Orders */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Daily Report</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/seller-orders" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Wishlist */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Monthly Report</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/seller/totalcustomers" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Address */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Yearly Report</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/seller/totalproducts" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerReports;
