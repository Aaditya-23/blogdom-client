import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useDetectKeyDown from "../../hooks/useDetectKeyDown";
import "./styles.css";

function Modal(props) {
  const { setOpen } = props;

  const isVerified = useSelector((state) => state.admin.isVerified);

  const handleClose = () => setOpen(false);
  useDetectKeyDown(["Escape"], handleClose);

  const variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
    },
    exit: {
      x: "-100%",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "tween",
        duration: 0.1,
      }}
      className="drawer-modal"
    >
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
          <Link to="/">Blogs</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {isVerified === true && (
          <li>
            <Link to="/writeblog">Write</Link>
          </li>
        )}

        <li
          className="github-icon"
          onClick={() => {
            location.href = "https://github.com/Aaditya-23/blogdom-client";
          }}
        >
          <svg
            height="100%"
            viewBox="0 0 20 20"
            width="100%"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026A9.555 9.555 0 0110 4.836a9.59 9.59 0 012.504.337c1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48A10 10 0 0020 10c0-5.522-4.478-10-10-10"
              fillRrule="evenodd"
            ></path>
          </svg>
        </li>
      </ul>
    </motion.div>
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
