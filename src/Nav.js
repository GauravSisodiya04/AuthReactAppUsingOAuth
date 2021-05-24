import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li className="link-item">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile" className="link-item">
            Profile
          </Link>{" "}
        </li>
        <li className="link-item">
          <Link to="/">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
