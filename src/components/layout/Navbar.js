import { Link, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list--item">
                    <Link to={window.baseUrl + 'editapp/cd' + '?func=ll&objId=' + window.currentWebreportId + '&objAction=RunReport'} className="navbar-list--link">Company Details</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to={window.baseUrl + 'editapp/bm' + '?func=ll&objId=' + window.currentWebreportId + '&objAction=RunReport'} className="navbar-list--link">Board Members</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to={window.baseUrl + 'editapp/fd' + '?func=ll&objId=' + window.currentWebreportId + '&objAction=RunReport'} className="navbar-list--link">Financial Data</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to={window.baseUrl + 'editapp/sc' + '?func=ll&objId=' + window.currentWebreportId + '&objAction=RunReport'} className="navbar-list--link">Share of Companies</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;