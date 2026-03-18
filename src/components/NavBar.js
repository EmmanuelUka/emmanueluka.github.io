import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
        <div className="design-navbar d-flex align-items-center">
            <nav className="nav nav-pills nav-fill">

            <NavLink className="nav-link" to="/">Home</NavLink>

            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>

            <NavLink className="nav-link" to="/about">
              About
            </NavLink>

            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>

            <NavLink className="nav-link" to="/blog-photography">
              Blog/Photography
            </NavLink>
            </nav>
        </div>
    );
}

export default NavBar;
