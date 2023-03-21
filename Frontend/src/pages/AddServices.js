import { useState } from 'react';
import axios from 'axios';
import './AddServices.css';

function AddServices({ services, setServices }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newService = {
      name: name,
      price: price,
    };

    axios
      .post('/api/services', newService)
      .then((response) => {
        setServices([...services, response.data]);
        setName('');
        setPrice('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add-service-form-container">
      <form onSubmit={handleSubmit} className="add-service-form">
        <h2 className="form-title">Add New Service</h2>
        <label className="form-label">
          Service Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Service Price:
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Add Service
        </button>
      </form>
    </div>
  );
}
 export default AddServices;