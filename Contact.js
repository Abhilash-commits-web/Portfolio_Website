import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/movabzrz', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      setStatus("Thanks for your submission!");
      form.reset();
    } else {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
          <ul>
            <li><i className="fas fa-envelope"></i> <a href="mailto:your.email@example.com">arajan60@gmail.com</a></li>
            <li><i className="fab fa-linkedin"></i> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/abhilashrajangm/</a></li>
            <li><i className="fab fa-github"></i> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">https://github.com/Abhilash-commits-web</a></li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;