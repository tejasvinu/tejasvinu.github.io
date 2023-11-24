// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me if you have any questions, collaboration opportunities, or just
        want to say hello!
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
