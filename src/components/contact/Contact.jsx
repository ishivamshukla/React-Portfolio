import { useState } from "react";
import "./contact.scss";
import { Person, Mail } from "@material-ui/icons";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9455 733 577</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ishivamshukl@gmail.com</span>
          </div>
      </div>
    </div>
  );
}
