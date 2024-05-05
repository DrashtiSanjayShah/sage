import React, { useState } from 'react';
import './ReportForm.css';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'; 

async function addReportData(name, dob,placeOfBirth, timeOfBirth, sname, sdob, splaceOfBirth, stimeOfBirth) {
  try{
    const docRef = await addDoc(collection(db, "reports"), {
      name: name,
      dob: dob,
      placeOfBirth: placeOfBirth,
      timeOfBirth: timeOfBirth,
      sname: sname,
      sdob: sdob,
      splaceOfBirth: splaceOfBirth,
      stimeOfBirth: stimeOfBirth,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch(error) {
    console.error("Error adding document: ", error);
    return false;
  }
}

const ReportForm = () => {

  const [show, setShow] = useState(false);

  const showForm = () => {
    if (show === true) {
      setShow(false)
    } else{
      setShow(true)
    }
  }
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    placeOfBirth: '',
    timeOfBirth: '',
    sname: '',
    sdob: '',
    splaceOfBirth: '',
    stimeOfBirth: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("received");
    const added = await addReportData(formData.name, formData.dob, formData.placeOfBirth, formData.timeOfBirth, formData.sname, formData.sdob, formData.splaceOfBirth, formData.stimeOfBirth);
    if (added) {
setFormData("");
alert ("Information is recorded in firebase successfully.");
    }
  }


    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.dob) {
      errors.dob = 'Date of Birth is required';
    }

    if (!data.placeOfBirth) {
      errors.placeOfBirth = 'Place of Birth is required';
    }
    if (!data.timeOfBirth) {
      errors.timeOfBirth = 'Time of Birth is required';
    }
    if (!data.sname) {
      errors.sname = 'Name of the Spouse is required';
    }

    if (!data.sdob) {
      errors.sdob = 'Date of Birth of the Spouse is required';
    }

    if (!data.splaceOfBirth) {
      errors.splaceOfBirth = 'Place of Birth of the Spouse is required';
    }

    if (!data.stimeOfBirth) {
      errors.stimeOfBirth = 'Time of Birth of the Spouse is required';
    }

    return errors;
  };

  // if (submitted) {
  //   return (
  //     <div className="notification">
  //       <p>Your information is recorded.</p>
  //       {setTimeout(() => {
  //         window.location.href = '/'; // Redirect to home screen
  //       }, 1000)}
  //     </div>
  //   );
  // }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <span className="error">{errors.dob}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="placeOfBirth">Place of Birth:</label>
        <input
          type="text"
          id="placeOfBirth"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
        />
        {errors.placeOfBirth && <span className="error">{errors.placeOfBirth}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="placeOfBirth">Time of Birth:</label>
        <input
          type="text"
          id="timeOfBirth"
          name="timeOfBirth"
          value={formData.timeOfBirth}
          onChange={handleChange}
        />
        {errors.timeOfBirth && <span className="error">{errors.timeOfBirth}</span>}
      </div>
      <div className="form-group">
        <label for='check'>
        <input
          type="checkbox"
          onClick={showForm}
        />
        Do you know your spouse's details?</label>
        {show && <>
          <div className="form-group">
        <label htmlFor="sname">Spouse's Name:</label>
        <input
          type="text"
          id="sname"
          name="sname"
          value={formData.sname}
          onChange={handleChange}
        />
        {errors.sname && <span className="error">{errors.sname}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="sdob">Spouse's Date of Birth:</label>
        <input
          type="date"
          id="sdob"
          name="sdob"
          value={formData.sdob}
          onChange={handleChange}
        />
        {errors.sdob && <span className="error">{errors.sdob}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="splaceOfBirth">Spouse's Place of Birth:</label>
        <input
          type="text"
          id="splaceOfBirth"
          name="splaceOfBirth"
          value={formData.splaceOfBirth}
          onChange={handleChange}
        />
        {errors.splaceOfBirth && <span className="error">{errors.splaceOfBirth}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="splaceOfBirth">Spouse's Time of Birth:</label>
        <input
          type="text"
          id="stimeOfBirth"
          name="stimeOfBirth"
          value={formData.stimeOfBirth}
          onChange={handleChange}
        />
        {errors.stimeOfBirth && <span className="error">{errors.stimeOfBirth}</span>}
      </div>
      </>}
      </div>
      {/* <div className="form-group">
        <label htmlFor="sunSign">Sun Sign:</label>
        <select
          id="sunSign"
          name="sunSign"
          value={formData.sunSign}
          onChange={handleChange}
        >
          <option value="">Select Sun Sign</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Leo">Leo</option>
          <option value="Libra">Libra</option>
          <option value="Pisces">Pisces</option>
          <option value="Cancer">Cancer</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Gemini">Gemini</option>
          <option value="Vigro">Vigro</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Scorpio">Scorpio</option>
        </select>
        {errors.sunSign && <span className="error">{errors.sunSign}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="moonSign">Moon Sign:</label>
        <select
          id="moonSign"
          name="moonSign"
          value={formData.moonSign}
          onChange={handleChange}
        >
          <option value="">Select Moon Sign</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Leo">Leo</option>
          <option value="Libra">Libra</option>
          <option value="Pisces">Pisces</option>
          <option value="Cancer">Cancer</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Gemini">Gemini</option>
          <option value="Vigro">Vigro</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Scorpio">Scorpio</option>
        </select>
        {errors.moonSign && <span className="error">{errors.moonSign}</span>}
      </div> */}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ReportForm;
