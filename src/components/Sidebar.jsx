import { IoCloseSharp } from "react-icons/io5";
import { useAppContext } from "../AppContext";
import { NavLink } from "react-router";
import WrapperSidebar from "../styles/Sidebar.js";
import logo from "../assets/vite.svg";
function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  return (
    <WrapperSidebar
      className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}
    >
      <div className="sidebar-container">
        <div className="sidebar-header">
          <NavLink to="/" end className="nav-logo">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="logo">Logo</span>
          </NavLink>
          <button
            className="aside-close-btn"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoCloseSharp />
          </button>
        </div>
        <hr />
        <div className="curr-location">
          <h4>Current Place</h4>
        </div>
        <hr />
        <div className="sidebar-links">
          <NavLink
            to="/"
            end
            className="nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/favorite-places"
            className="nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            Favorite Places
          </NavLink>
        </div>
      </div>
    </WrapperSidebar>
  );
}
export default Sidebar;
