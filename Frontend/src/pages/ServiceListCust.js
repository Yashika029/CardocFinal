import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceListCust.css';

function ServiceListCust() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
  }, []);

  const handleAddToCart = (serviceId) => {
    // add service with serviceId to cart
  };

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>${service.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleAddToCart(service.id)}>Add to cart</button>
              </td>
            </tr>
          ))} */}
          <tr>
          <td>1</td>
          <td>oil change replacement</td>
          <td>1000</td>
          <td>
            <button onClick={()=>handleAddToCart}>Add to Cart</button>
          </td>
          </tr>
          <tr>
          <td>2</td>
          <td>Engine Coolant Top up</td>
          <td>1200</td>
          <td>
            <button onClick={()=>handleAddToCart}>Add to Cart</button>
          </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Brake fluid top up</td>
            <td>1500</td>
            <td>
            <button onClick={()=>handleAddToCart}>Add to Cart</button>
          </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Engine belt change</td>
            <td>1000</td>
            <td>
            <button onClick={()=>handleAddToCart}>Add to Cart</button>
          </td>
          </tr>


          <tr>
            <td>5</td>
            <td>Brake disc change</td>
            <td>500</td>
            <td>
            <button onClick={()=>handleAddToCart}>Add to Cart</button>
          </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default ServiceListCust;


