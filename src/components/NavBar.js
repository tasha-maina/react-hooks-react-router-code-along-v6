import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default NavBar;
