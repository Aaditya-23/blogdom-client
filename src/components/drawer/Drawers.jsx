import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import "./styles.css";
import useDetectKeyDown from "./useDetectKeyDown";

function Modal(props) {
  const { setOpen } = props;

  const handleClose = () => setOpen(false);
  const r = useDetectKeyDown(["Escape"], handleClose);

  return (
    <div className="drawer-modal">
      <header className="drawer-closeIcon" onClick={handleClose}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
          </svg>
        </button>
      </header>

      <ul className="drawer-list">
        <li>
          <Searchbar />
        </li>

        <li>
          <Link to="/">Blogs</Link>
        </li>

        <li>
          <Link to="/tags">Tags</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <div className="drawer-wrapper">
      <button className="drawer-openIcon" onClick={handleOpen}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="4" y="7.5" width="16" height="1.5"></rect>
          <rect x="4" y="15" width="16" height="1.5"></rect>
        </svg>
      </button>

      <AnimatePresence>{open && <Modal setOpen={setOpen} />}</AnimatePresence>
    </div>
  );
}
