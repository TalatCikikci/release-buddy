import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    //setTimeout(() => {
    //    props.history.push('/about')
    //}, 2000)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
                <div id="logo">
                    <NavLink className="navbar-item" to="/release-buddy">
                        <img width="30" height="30" className="mx-2" src="../../static/img/android-chrome-192x192.png" alt="Release Buddy Logo" />
                    </NavLink>
                    Release Buddy
                </div>
            </div>

            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>

            <div className="collapse navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto align-items-center">
                    <li className="nav-item"><NavLink className="nav-link" to="/release-buddy">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/release-buddy/about">About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/release-buddy/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default withRouter(Navbar)