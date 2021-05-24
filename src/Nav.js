import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
}

export default Nav;