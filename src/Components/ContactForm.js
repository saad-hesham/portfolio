import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!subject) {
      errors.subject = 'Subject is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      // Send email logic
      window.location.href = `mailto:saadhesham626@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        {errors.subject && <span className="error">{errors.subject}</span>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;