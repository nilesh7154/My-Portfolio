import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1 className="head">MY PORTFOLIO</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#Education">Education</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
                
            </ul>
        </nav>
    );
}

export default Nav;
