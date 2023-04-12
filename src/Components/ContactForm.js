import emailjs from 'emailjs-com';

import { useRef, useState } from "react";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validate = () => {

    let errors = {};
    let isValid = true;
    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }
    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!subject) {
      errors.subject = "Subject is required";
      isValid = false;
    }
    if (!message) {
      errors.message = "Message is required";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      e.preventDefault();

      emailjs.sendForm('service_hgv4wwe', 'template_jl0xfli', form.current, 'irT832AFiNyH3Biqx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
        setErrors({});
        }
  };

  return (
    <form ref={form}id='contact'>

    <div className="container">
    <h1>Contact Me</h1>

      <div className="row">

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <input
              type="email"
              name='name'
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter name"
              value={name}
              name='email'
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              placeholder="Enter subject"
              value={subject}
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              rows="5"
              placeholder="Enter message"
              value={message}
              name='message'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default ContactForm;