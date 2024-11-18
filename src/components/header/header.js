import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user } = useAuth();

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
            
            {user && (
                <Link to="/profile" className="seller-profile">
                    <span style={{color: "black"}}>{user.username}</span>
                    <div className="profile-icon-wrapper">
                        <img src={user.profileImage || "/images/default-profile.jpg"} alt="Profile" className="profile-icon" />
                    </div>
                </Link>
            )}
        </nav>
    );
};

export default Header;

