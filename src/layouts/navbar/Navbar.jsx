import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/Drawers";
import { destroyAdmin } from "../../redux/adminSlice";
import "./styles.css";

export default function Navbar() {
  const isVerified = useSelector((state) => state.admin.isVerified);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(destroyAdmin());
  };

  return (
    <nav className="navbar">
      <Drawer />

      <h2 className="nav-title">
        <Link to="/">Blogdom</Link>
      </h2>
      {isVerified === true && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}
