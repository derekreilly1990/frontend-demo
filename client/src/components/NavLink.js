import {Link, useRouteMatch} from "react-router-dom";
import React from "react";

export const NavLink = ({ label, to, activeOnlyWhenExact }) => {

    let match = useRouteMatch({
        path: to,
    });
    return (
        <li className={match && match.isExact ? 'active nav-item' : 'nav-item'}><Link to={to} className="nav-link ">{label}</Link></li>
    )
}
