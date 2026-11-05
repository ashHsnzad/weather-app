import logo from "../assets/vite.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useAppContext } from "../AppContext";

import { NavLink } from "react-router";
import WrapperNavbar from "../styles/Navbar";
function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  return (
    <WrapperNavbar>
      <div className="nav-center">
        <NavLink to="/" end className="nav-logo">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo">Logo</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/favorite-places" className="nav-link">
            Favorite Places
          </NavLink>
        </div>
        <button
          className="menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </WrapperNavbar>
  );
}
export default Navbar;
