import "./contact.scss";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const textareaRef = useRef();
  const [textareaHeight, setTextareaHeight] = useState(200);
  const [state, handleSubmit] = useForm("mgebwqjv");

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (state.succeeded) return <p>Thanks for Joining</p>;
  const adjustHeight = (e) => {
    if (e.target.scrollHeight === textareaRef.current.clientHeight) return;
    if (e.target.scrollHeight > 200) return;
    setTextareaHeight(e.target.scrollHeight + "px");
  };
  const handleChange = (e) => {
    setMessage((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="contactContainer">
      <div className="formHolder">
        <form action="https://formspree.io/f/mgebwqjv" method="POST">
          <div className="inputDiv">
            <label>Name</label>
            <input
              onChange={handleChange}
              id="name"
              name="name"
              placeholder="Your name here"
              required={true}
            />
          </div>
          <div className="inputDiv">
            <label>Contact</label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="The Best Way to Contact You"
              required={true}
            />
          </div>
          <div className="inputDiv ">
            <label>Your Message Here</label>
            <textarea
              id="message"
              name="message"
              required={true}
              onKeyDown={adjustHeight}
              ref={textareaRef}
              style={{ height: textareaHeight }}
              onChange={handleChange}
            />
            <div className="buttonDiv">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
