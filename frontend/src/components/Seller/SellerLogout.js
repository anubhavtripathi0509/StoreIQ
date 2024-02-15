function SellerLogout(){
    localStorage.removeItem('seller_id');
    localStorage.removeItem('seller_login');
    localStorage.removeItem('seller_username');
    window.location.href = "/seller-login";
}

export default SellerLogout;