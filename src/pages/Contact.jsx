import Navbar from "../layouts/navbar/Navbar";
import { contact } from "../services/api";
import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      text: e.target.text.value,
    };

    contact(data)
      .then(() => {
        e.target.email.value = null;
        e.target.text.value = null;
        alert("Message Received");
      })
      .catch(() => alert("An error Occured. Please try again"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="contactpage"
    >
      <Navbar />

      <div className="contact-main">
        <div className="contact-card">
          <div className="firstHalf">
            <div>Contact</div>
          </div>

          <form
            className="secondHalf"
            autoComplete="on"
            onSubmit={handleFormSubmit}
          >
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="email"
              autoComplete="email"
            />
            <textarea
              required
              name="text"
              className="message"
              placeholder="Enter you message here..."
            ></textarea>
            <button type="submit" className="contact-submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
