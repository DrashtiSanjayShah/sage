import React, { useState } from 'react';
import './EmailForm.css';
import Ragini from './Ragini.pdf';
const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setShowDownloadButton(true);
    } else {
      setError('Invalid email format');
      setShowDownloadButton(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleDownload = () => {
    // Add logic here to download the sample report
    alert('Report downloaded successfully!');
  };

  return (
    <div className="email-form">
      {!showDownloadButton && (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
          {error && <span className="error">{error}</span>}
          {!showDownloadButton && <button type="submit">Submit</button>}
        </form>
      )}
      {showDownloadButton && (
        <a href={Ragini} download="Sample Report.pdf">
        <button type="button" onClick={handleDownload}>
          Download Sample Report
        </button>
        </a>
      )}
    </div>
  );
  
};

export default EmailForm;
