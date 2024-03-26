import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { loggedIn } = useAuth();

  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">
          <Link to={"/"}>Ecommerce</Link>
        </div>
        <ul className="menu">
          <li>
            <Link to={"/"}>Products</Link>
          </li>
        </ul>
      </div>

      <div className="right">
        {!loggedIn && (
          <>
            <Link to={"/signin"}>
              <Button colorScheme="blue">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button colorScheme="blue">Register</Button>
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            <Link to={"/profile"}>
              <Button colorScheme="gray">Profile</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
