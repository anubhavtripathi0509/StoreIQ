function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand">StoreIQ</a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Link</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;