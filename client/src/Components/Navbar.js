import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home Page</Link>
            <Link to="/books">Shop</Link>
            <Link to="/payment" >BUY</Link>
        </nav>
    );
}

export default Navbar;