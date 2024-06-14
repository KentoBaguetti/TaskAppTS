import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>TaskTaskTask</h3>
      <div className="nav-links">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/new">
          <h3>New</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
