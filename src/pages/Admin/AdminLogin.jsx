import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/navbar/Navbar";
import { setNewAdmin } from "../../redux/adminSlice";
import { adminLogin } from "../../services/api";
import { motion } from "framer-motion";
import "./adminLogin.css";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const controller = new AbortController();

    adminLogin(controller.signal, data)
      .then((res) => {
        const { admin, token } = res;
        dispatch(setNewAdmin({ admin, token }));
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const inValidCred = error.data.inValidCred;
        if (inValidCred === undefined || inValidCred === true)
          alert("Email/Password does not match");
        else alert("An Error Occured, try again.");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="adminLoginPage"
    >
      <Navbar />

      <div className="adminLogin-main">
        <div className="login-card">
          <h1 className="login-title">
            Login
            {/* <span className="material-symbols-outlined">login</span> */}
          </h1>

          <form
            className="login-form"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="admin-username"
            />
            <input
              required
              name="password"
              type="password"
              placeholder="Password"
              className="admin-password"
            />
            <button type="submit" className="login-submitButton">
              Login
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
