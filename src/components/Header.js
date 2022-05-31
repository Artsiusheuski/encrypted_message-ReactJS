import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link for_a" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link for_a" to="/note">
            Notes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link for_a" to="/create">
            Created note
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link for_a" to="/about">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
