import React, { useState, useEffect } from 'react';

export default function Navbar(props) {
    const [color, setcolor] = useState("black")

    useEffect(() => {
        if (props.color) {
            setcolor(props.color)
        }
    }, [props.color])
    const style = {
        color: color,
        fontWeight: "500"
    };
    const style2 = {
        color: "black",
        fontWeight: "500"
    };
    const isDashboardActive = props.currentPage === "dashboard"

    const handleNavigation = (page) => {
        props.onNavigation(page)
    }
    return (
        <div>
            <h1 className='container p-3 my-3 bg-primary'></h1>
            <nav className="navbar navbar-expand-lg bg-body-secondary m-0 border-bottom border-2 border-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className={`nav-link ${props.currentPage === "home" ? "active" : ""}`} aria-current="page"  onClick={() => handleNavigation("home")} style={style}>Homepage</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isDashboardActive ? "active" : ""}`} aria-current="page"  onClick={() => handleNavigation("dashboard")} style={style}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link`} onClick={() => handleNavigation("tasklist")} style={isDashboardActive ? style2 : style} >Task List</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="d-flex">
                    <button className="btn btn-primary px-3" type="submit">SignOut</button>
                </form>
            </nav>

        </div>
    );
}