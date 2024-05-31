import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='header-container'>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">Brand</div>
                    <button className="navbar-toggler" onClick={toggleNavbar}>
                        ☰
                    </button>
                    <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/posts" className="navbar-item">Posts</Link>
                        <Link to="/users" className="navbar-item">Users</Link>
                        <Link to="/contact" className="navbar-item">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;