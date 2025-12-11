function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Main St, City, State 12345</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;