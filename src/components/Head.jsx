import React from 'react'
import {logo} from "../const/imgconst"
function Head() {
    return (
// Menu as well
        <header className="ms-header navbar-white">
            <nav className="ms-nav">
                <div className="ms-logo">
                    <a href="index-2" data-type="page-transition">
                        <div className="logo-dark"><img src={logo} alt="logo image" /></div>
                        <div className="logo-light current"><img src={logo} alt="logo image" /></div>
                    </a>
                </div>
                <button className="hamburger" type="button" data-toggle="navigation">
                    <span className="hamburger-box">
                        <span className="hamburger-label">menu</span>
                        <span className="hamburger-inner" />
                    </span>
                </button>
                <div className="height-full-viewport">
                    <ul className="ms-navbar">
                        {/* Nav Link */}
                        <li className="nav-item">
                            <a href="index-2" data-type="page-transition">
                                <span className="ms-btn">home</span>
                                <span className="nav-item__label">Back to home page</span>
                            </a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-item">
                            <a href="albums" data-type="page-transition">
                                <span className="ms-btn">albums</span>
                                <span className="nav-item__label">View all our works</span>
                            </a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-item">
                            <a href="gallery" data-type="page-transition">
                                <span className="ms-btn">gallery</span>
                                <span className="nav-item__label">Interactively disintermediate</span>
                            </a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-item">
                            <a href="blog" data-type="page-transition">
                                <span className="ms-btn">blog</span>
                                <span className="nav-item__label">Discover fascinating stories</span>
                            </a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-item">
                            <a href="about" data-type="page-transition">
                                <span className="ms-btn">about</span>
                                <span className="nav-item__label">Learn more about the author</span>
                            </a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-item">
                            <a href="contact" data-type="page-transition">
                                <span className="ms-btn">contact</span>
                                <span className="nav-item__label">Get in touch and find us</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Head
