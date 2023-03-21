import React, { useState } from 'react';
import axios from 'axios';
import './CarRegistration.css';
import { Link } from 'react-router-dom';


const CarRegistration= () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    fuel: '',
    plateNo: '',
    mfgyear: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cars', formData);
      console.log(response);
      // Do something with the response, such as show a success message
    } catch (error) {
      console.log(error);
      // Do something with the error, such as show an error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <form className="car-registration-form" onSubmit={handleSubmit}>
        <h1>Car Registration</h1>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="fuel">Fuel:</label>
        <input
          type="text"
          id="fuel"
          name="fuel"
          value={formData.fuel}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="plateNo" maxlength="10">License Plate Number:</label>
        <input
          type="text"
          id="plateNo"
          name="plateNo"
          value={formData.plateNo}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="plateNo" maxlength="10">Manufacturing year</label>
        <input
          type="text"
          id="mfgyear"
          name="mfgyear"
          value={formData.mfgyear}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <Link to={'/serviceCust'}>
      <button type="submit" className="btn btn-primary">Submit</button>
      </Link>
    </form>
  );
};

export default CarRegistration;