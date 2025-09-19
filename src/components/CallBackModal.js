import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './CallBackModal.css';

const CallBackModal = ({ show, onClose }) => {
  const [activeForm, setActiveForm] = useState('general');
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({
    general: { firstName: '', lastName: '', email: '', contactNumber: '', occupation: '', message: '' },
    corporate: { fullName: '', contactNumber: '', email: '', occupation: '', companyName: '', message: '' },
    hire: { fullName: '', contactNumber: '', companyName: '', email: '', message: '' }
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [formType]: {
        ...prev[formType],
        [name]: value
      }
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (type) => {
    const newErrors = {};
    const data = formData[type];

    if (type === 'general') {
      if (!data.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!data.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!data.occupation.trim()) newErrors.occupation = 'Occupation is required';
    } else {
      if (!data.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (type === 'corporate' && !data.occupation.trim()) newErrors.occupation = 'Occupation is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(data.contactNumber.replace(/\D/g, ''))) {
      newErrors.contactNumber = 'Please enter a valid 10-digit phone number';
    }

    if (type === 'corporate' && !data.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (type === 'hire' && !data.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!data.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMail = (e, type) => {
    e.preventDefault();
    
    if (validateForm(type)) {
      // Here you would typically send the data to your backend
      console.log(`Form submitted: ${type}`, formData[type]);
      setFormType(type);
      setSubmitted(true);
      
      // Reset form data after successful submission
      setFormData({
        general: { firstName: '', lastName: '', email: '', contactNumber: '', occupation: '', message: '' },
        corporate: { fullName: '', contactNumber: '', email: '', occupation: '', companyName: '', message: '' },
        hire: { fullName: '', contactNumber: '', companyName: '', email: '', message: '' }
      });
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  const getSuccessMessage = () => {
    switch(formType) {
      case 'general':
        return "Thank you for your enquiry! We'll get back to you soon.";
      case 'corporate':
        return "Thank you for your interest in corporate training! Our team will contact you shortly.";
      case 'hire':
        return "Thank you for your interest in hiring from us! We'll connect with you soon.";
      default:
        return "Thank you! We'll contact you shortly.";
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Request a Call Back</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <div className="text-center p-4 success-animation">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h4 className="success-title">Thank You!</h4>
            <p className="success-message">{getSuccessMessage()}</p>
            <button 
              className="btn btn-primary success-close-btn"
              onClick={handleClose}
            >
              Close
            </button>
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
                      <input 
                        type="text" 
                        placeholder="First Name *" 
                        name="firstName" 
                        value={formData.general.firstName}
                        onChange={(e) => handleInputChange(e, 'general')}
                        className={errors.firstName ? 'error' : ''}
                      />
                      {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="text" 
                        placeholder="Last Name *" 
                        name="lastName" 
                        value={formData.general.lastName}
                        onChange={(e) => handleInputChange(e, 'general')}
                        className={errors.lastName ? 'error' : ''}
                      />
                      {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="email" 
                        placeholder="Email *" 
                        name="email" 
                        value={formData.general.email}
                        onChange={(e) => handleInputChange(e, 'general')}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="tel" 
                        placeholder="Contact Number *" 
                        name="contactNumber" 
                        value={formData.general.contactNumber}
                        onChange={(e) => handleInputChange(e, 'general')}
                        className={errors.contactNumber ? 'error' : ''}
                      />
                      {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
                    </div>
                    <div className="form-cell full-width">
                      <input 
                        type="text" 
                        placeholder="Occupation *" 
                        name="occupation" 
                        value={formData.general.occupation}
                        onChange={(e) => handleInputChange(e, 'general')}
                        className={errors.occupation ? 'error' : ''}
                      />
                      {errors.occupation && <span className="error-text">{errors.occupation}</span>}
                    </div>
                  </div>
                  <div className="form-message">
                    <textarea 
                      name="message" 
                      cols="30" 
                      rows="5" 
                      placeholder="Your message here... *" 
                      value={formData.general.message}
                      onChange={(e) => handleInputChange(e, 'general')}
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
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
                    <div className="form-cell">
                      <input 
                        type="text" 
                        placeholder="Full Name *" 
                        name="fullName" 
                        value={formData.corporate.fullName}
                        onChange={(e) => handleInputChange(e, 'corporate')}
                        className={errors.fullName ? 'error' : ''}
                      />
                      {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="tel" 
                        placeholder="Mobile Number *" 
                        name="contactNumber" 
                        value={formData.corporate.contactNumber}
                        onChange={(e) => handleInputChange(e, 'corporate')}
                        className={errors.contactNumber ? 'error' : ''}
                      />
                      {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="email" 
                        placeholder="Email *" 
                        name="email" 
                        value={formData.corporate.email}
                        onChange={(e) => handleInputChange(e, 'corporate')}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="text" 
                        placeholder="Occupation *" 
                        name="occupation" 
                        value={formData.corporate.occupation}
                        onChange={(e) => handleInputChange(e, 'corporate')}
                        className={errors.occupation ? 'error' : ''}
                      />
                      {errors.occupation && <span className="error-text">{errors.occupation}</span>}
                    </div>
                    <div className="form-cell full-width">
                      <input 
                        type="text" 
                        placeholder="Company Name *" 
                        name="companyName" 
                        value={formData.corporate.companyName}
                        onChange={(e) => handleInputChange(e, 'corporate')}
                        className={errors.companyName ? 'error' : ''}
                      />
                      {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                    </div>
                  </div>
                  <div className="form-message">
                    <textarea 
                      name="message" 
                      cols="30" 
                      rows="5" 
                      placeholder="Your message here... *" 
                      value={formData.corporate.message}
                      onChange={(e) => handleInputChange(e, 'corporate')}
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
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
                      <input 
                        type="text" 
                        placeholder="Full Name *" 
                        name="fullName" 
                        value={formData.hire.fullName}
                        onChange={(e) => handleInputChange(e, 'hire')}
                        className={errors.fullName ? 'error' : ''}
                      />
                      {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="tel" 
                        placeholder="Mobile Number *" 
                        name="contactNumber" 
                        value={formData.hire.contactNumber}
                        onChange={(e) => handleInputChange(e, 'hire')}
                        className={errors.contactNumber ? 'error' : ''}
                      />
                      {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="text" 
                        placeholder="Company Name *" 
                        name="companyName" 
                        value={formData.hire.companyName}
                        onChange={(e) => handleInputChange(e, 'hire')}
                        className={errors.companyName ? 'error' : ''}
                      />
                      {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                    </div>
                    <div className="form-cell">
                      <input 
                        type="email" 
                        placeholder="Email *" 
                        name="email" 
                        value={formData.hire.email}
                        onChange={(e) => handleInputChange(e, 'hire')}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-message">
                    <textarea 
                      name="message" 
                      cols="30" 
                      rows="5" 
                      placeholder="Your message here... *" 
                      value={formData.hire.message}
                      onChange={(e) => handleInputChange(e, 'hire')}
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
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