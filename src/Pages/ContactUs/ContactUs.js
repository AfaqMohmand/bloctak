import React, { useRef } from "react";
import "./ContactUs.css";
// import { send } from "emailjs-com";
import emailjs from "@emailjs/browser";
import Footer from "../../Components/Footer/Footer";
import ContactBtn from "../../assets/contactBtn.png";
import Navbar from "../../Components/Navbar/Navbar";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bt19ut9",
        "template_jc2he7l",
        form.current,
        "EoQjd9Xmh2KAWgZoP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-us-whole-form">
      <Navbar />
      <section className="contactUs">
        <h3 className="contact-us-h3">
          Get in <span> Touch</span>
        </h3>
        <p className="contact-us-p">
          Let us know what you're working on and how we can help
        </p>
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="form-container"
        >
          <div className="name-container input-field">
            <p>Full Name</p>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter name"
              className="input-field-inner"
            />
          </div>
          <div className="company-container input-field">
            <p>Company Name</p>
            <input
              type="text"
              name="user_companyName"
              required
              placeholder="Example BlocTak"
              className="input-field-inner"
            />
          </div>
          <div className="email-container input-field">
            <p>Email Address</p>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Example support@gmail.com"
              className="input-field-inner"
            />
          </div>
          <div className="project-twitter-handle input-field">
            <p>Project Twitter Handle</p>
            <input
              type="text"
              name="project-twitter-handle"
              required
              placeholder="Example @johndoe"
              className="input-field-inner"
            />
          </div>
          <div className="project-discord input-field">
            <p>Project Discord</p>
            <input
              type="text"
              name="discord-link"
              placeholder="Example https://discord.com/invite/vBnQeCkdi2"
              className="input-field-inner"
            />
          </div>
          <div className="project-review input-field">
            <p>Project Review</p>
            <textarea
              name="message"
              // name="project-review"
              placeholder="Tell us about your project"
              className="input-field-inner-text-area"
            />
          </div>
          <div className="marketing-plan input-field">
            <p>Your Marketing Plan</p>
            <textarea
              name="message"
              // name="marketing-plan"
              placeholder="Tell us about your marketing"
              className="input-field-inner-text-area"
            />
          </div>
          <button type="submit" className="contact-btn btn">
            <img src={ContactBtn} alt="" />
            <span>SEND MESSAGE</span>
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
