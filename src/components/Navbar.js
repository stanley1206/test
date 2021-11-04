import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Link to="/">
                        <i class="fas fa-music">窩木</i>
                    </Link>
                </div>
                <ul class="menu">
                    <li><Link to="/cat" target="_blank">所有商品</Link></li>
                    <li><Link to="/dog" target="_blank">關於窩木</Link></li>
                    <li><Link to="/rabbit" target="_blank">購物須知</Link></li>
                    <li><Link to="/pig" target="_blank">會員制度</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;