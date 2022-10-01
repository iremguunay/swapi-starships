import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ logo }) => {
  return (
    <>
      <header className="navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="Star Wars" />
        </Link>
      </header>
    </>
  );
};

export default Navigation;
