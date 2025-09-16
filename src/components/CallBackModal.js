import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './CallBackModal.css';

const CallBackModal = ({ show, onClose }) => {
  const [activeForm, setActiveForm] = useState('general');
  const [submitted, setSubmitted] = useState(false);

  const sendMail = (e, formType) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(`Form submitted: ${formType}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Request a Call Back</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <div className="text-center p-4">
            <i className="fas fa-check-circle text-success fa-3x mb-3"></i>
            <h4>Thank You!</h4>
            <p>We'll contact you shortly.</p>
          </div>
        ) : (
          <div className="callback-section">
            <div className="form-selector">
              <button 
                className={activeForm === 'general' ? 'active general-btn' : 'general-btn'} 
                onClick={() => setActiveForm('general')}
              >
                General Enquiries
              </button>
              <button 
                className={activeForm === 'corporate' ? 'active corporate-btn' : 'corporate-btn'} 
                onClick={() => setActiveForm('corporate')}
              >
                Corporate Training
              </button>
              <button 
                className={activeForm === 'hire' ? 'active hire-btn' : 'hire-btn'} 
                onClick={() => setActiveForm('hire')}
              >
                Hire From Us
              </button>
            </div>
            
            {/* General Enquiry Form - 2x2 Layout */}
            {activeForm === 'general' && (
              <div className="callback-form form-2x2">
                <form onSubmit={(e) => sendMail(e, 'general')}>
                  <div className="form-grid">
                    <div className="form-cell">
                      <input type="text" placeholder="First Name" name="firstName" required />
                    </div>
                    <div className="form-cell">
                      <input type="text" placeholder="Last Name" name="lastName" required />
                    </div>
                    <div className="form-cell">
                      <input type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-cell">
                      <input type="tel" placeholder="Contact Number" name="contactNumber" required />
                    </div>
                  </div>
                  <div className="form-message">
                    <textarea name="message" cols="30" rows="5" placeholder="Your message here..." required></textarea>
                  </div>
                  <div className="form-submit">
                    <input type="submit" value="Submit Request" className="general-submit" />
                  </div>
                </form>
              </div>
            )}
            
            {/* Corporate Training Form - 2x2 Layout */}
            {activeForm === 'corporate' && (
              <div className="callback-form form-2x2">
                <form onSubmit={(e) => sendMail(e, 'corporate')}>
                  <div className="form-grid">
                    <div className="form-cell full-width">
                      <input type="text" placeholder="Full Name" name="fullName" required />
                    </div>
                    <div className="form-cell">
                      <input type="tel" placeholder="Mobile Number" name="contactNumber" required />
                    </div>
                    <div className="form-cell">
                      <input type="email" placeholder="Email" name="email" required />
                    </div>
                  </div>
                  <div className="form-message">
                    <textarea name="message" cols="30" rows="5" placeholder="Your message here..." required></textarea>
                  </div>
                  <div className="form-submit">
                    <input type="submit" value="Submit Request" className="corporate-submit" />
                  </div>
                </form>
              </div>
            )}
            
            {/* Hire From Us Form - 2x2 Layout */}
            {activeForm === 'hire' && (
              <div className="callback-form form-2x2">
                <form onSubmit={(e) => sendMail(e, 'hire')}>
                  <div className="form-grid">
                    <div className="form-cell">
                      <input type="text" placeholder="Full Name" name="fullName" required />
                    </div>
                    <div className="form-cell">
                      <input type="tel" placeholder="Mobile Number" name="contactNumber" required />
                    </div>
                    <div className="form-cell">
                      <input type="text" placeholder="Company Name" name="companyName" required />
                    </div>
                    <div className="form-cell">
                      <input type="email" placeholder="Email" name="email" required />
                    </div>
                  </div>
                  <div className="form-message">
                    <textarea name="message" cols="30" rows="5" placeholder="Your message here..." required></textarea>
                  </div>
                  <div className="form-submit">
                    <input type="submit" value="Submit Request" className="hire-submit" />
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CallBackModal;