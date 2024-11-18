import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="top-nav">
            <div className="logo">
                <Link to="/">
                    <img 
                        src="/images/go-to-web-icon-for-your-web-design-logo-infographic-ui-vector.jpg" 
                        alt="Samipya" 
                        className="logo-image" 
                    />
                </Link>
                <span>Samipya for Sellers</span>
            </div>
            
            <div className="nav-links">
                <Link to="/Career">
                    <span>Career</span>
                </Link>
                <Link to="/About_us">
                    <span>About us</span>
                </Link>
                <Link to="/Contact_us">
                    <span>Contact us</span>
                </Link>
            </div>
            
            <Link to="/profile" className="seller-profile">
                <span style={{color: "black"}}>{JSON.parse(localStorage.getItem('user'))?.username || "Login"}</span>
                <div className="profile-icon-wrapper">
                    <img src={JSON.parse(localStorage.getItem('user'))?.profileImage || "/images/default-profile.jpg"} alt="Profile" className="profile-icon" />
                </div>
            </Link>
        </nav>
    );
}

export default Header;

