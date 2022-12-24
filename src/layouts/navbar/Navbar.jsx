import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/Drawers";
import { auth, GoogleAuth } from "../../data/firebase";
import "./styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((open) => !open);
  };

  const handleGoogleAuth = (e) => {
    GoogleAuth()
      .then(async (res) => {
        const token = await auth.currentUser
          .getIdToken()
          .then((token) => token);

        axios.get("http://localhost:5000/api/user/create-session", {
          headers: {
            authorization: "Bearer " + token,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const handleMicrosoftAuth = (e) => {};

  const handleAppleAuth = (e) => {};

  return (
    <nav className="navbar">
      <Drawer />
      <h2 className="nav-title">
        <Link to="/">Blogdom</Link>
      </h2>

      <div className="join-container">
        <button onClick={handleClick} className="join-blogdom">
          Register
        </button>
        <AnimatePresence>
          {open && (
            <div className="joinModal">
              <h2 className="form-title">Continue with</h2>

              <div className="authProviders">
                <div className="provider" onClick={handleGoogleAuth}>
                  <svg
                    height="100%"
                    viewBox="0 0 20 20"
                    width="100%"
                    fit=""
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                </div>

                <div className="provider" onClick={handleMicrosoftAuth}>
                  <svg
                    height="100%"
                    viewBox="0 0 20 20"
                    width="100%"
                    fit=""
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <g fill="none">
                      <path d="M0 0h9.504v9.504H0z" fill="#F25022"></path>
                      <path
                        d="M10.496 0H20v9.504h-9.504z"
                        fill="#7FBA00"
                      ></path>
                      <path d="M0 10.496h9.504V20H0z" fill="#00A4EF"></path>
                      <path
                        d="M10.496 10.496H20V20h-9.504z"
                        fill="#FFB900"
                      ></path>
                    </g>
                  </svg>
                </div>

                <div className="provider" onClick={handleAppleAuth}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 315"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
