import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" path="#">StoreIQ</Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">Categories</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">My Cart (1)</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;