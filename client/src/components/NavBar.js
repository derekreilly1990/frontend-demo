import React from 'react';
import {NavLink} from "./NavLink";
import {NavBarShoppingCart} from "./NavBarShoppingCart";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mb-0 h1" href="/">Smart Hardware Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <NavLink to={'/'} label={'Home'} activeOnlyWhenExact/>
                    <NavLink to={'/about'} label={'About'} activeOnlyWhenExact/>
                </ul>
                <NavBarShoppingCart />
            </div>
        </nav>
)};

export default Navbar;