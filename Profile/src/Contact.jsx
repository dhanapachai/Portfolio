import React, { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_stq6sy3';
  const EMAILJS_TEMPLATE_ID = 'template_emxz5g3';
  const EMAILJS_PUBLIC_KEY = 'R412VLT1x1vNPq75X';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Prepare template parameters based on your template
    const templateParams = {
      to_name: 'Pachaiyappan', // Your name for the template
      from_name: formData.name,
      name: formData.name, // For the subject line
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email // For reply-to header
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", info: "+91 6369910045" },
    { icon: <FaEnvelope />, title: "Email", info: "pachaidhanal@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", info: "Villupuram, India" }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Get in touch for opportunities</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm currently seeking an entry-level position as a Java Developer. 
              If you have opportunities or just want to connect, feel free to reach out!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div className="contact-detail" key={index}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="availability">
              <h4>Availability</h4>
              <p>Open to work • Immediate Joining • Full-time positions</p>
            </div>
          </div>
          
          <div className="contact-form card">
            <h3>Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus.type === 'success' && (
              <div className="alert-success" >
                {submitStatus.message}
              </div>
            )}
            
            {submitStatus.type === 'error' && (
              <div className="alert-error">
                {submitStatus.message}
              </div>
            )}
            
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending... 
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;