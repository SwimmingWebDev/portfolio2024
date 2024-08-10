import React, { useState } from "react";

const Contact = () => {
  /* https://web3forms.com */

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    data.append("access_key", "c7d823c8-6367-4fef-a108-e596c958c9ad");

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Message successfully sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setMessage("Failed to send message.");
    }
  };

  return (
    <footer>
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Send me a message!</h2>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="input-box">
            <label>Your Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Your Email</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              className="field field-msg"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={onChange}
              required
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="btn-primary">
              Send Message
            </button>
            {message && <span className="contact-results">{message}</span>}
          </div>
        </form>
      </section>
    </footer>
  );
};

export default Contact;
