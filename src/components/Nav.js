import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/' aria-label="Navigate to home">Home</Link></li>
                <li><Link to='/about' aria-label="Navigate to about">About</Link></li>
                <li><Link to='/menu' aria-label="Navigate to Menu">Menu</Link></li>
                <li><Link to='/reservations' aria-label="Navigate to reservations">Reservations</Link></li>
                <li><Link to='/order-online' aria-label="Navigate to order">Order Online</Link></li>
                <li><Link to='/login' aria-label="Navigate to login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;