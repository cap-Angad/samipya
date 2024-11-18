import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
            <Link to="/Product_details"> <li tabIndex="0"> Product Details</li></Link>
            <Link to="/Promotion_offers">     <li tabIndex="0">Promotion & Offers</li></Link>
            <Link to="/Statistics">    <li tabIndex="0"> Statistics</li></Link>
                <Link to="/Notifications">  <li tabIndex="0"> Notifications</li></Link>
                <Link to="/Reviews"> <li tabIndex="0">Reviews</li></Link>
            </ul>
        </aside>
    );
}

export default Sidebar;