import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceList.css';
import { Link } from 'react-router-dom';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/services/${id}`);
      setServices((prevServices) => prevServices.filter((s) => s.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='services-list'>
      <h1>Services List</h1>
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
              <td>{service.price}</td>
              <td>
                <button onClick={() => handleDelete(service.id)}>Delete</button>
              </td>
            </tr>
          ))} */}
           <tr>
          <td>1</td>
          <td>oil change replacement</td>
          <td>1000</td>
          <td>
            <button onClick={()=>handleDelete}>Delete</button>
          </td>
          </tr>
          <tr>
          <td>2</td>
          <td>Engine Coolant Top up</td>
          <td>1200</td>
          <td>
            <button onClick={()=>handleDelete}>Delete</button>
          </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Brake fluid top up</td>
            <td>1500</td>
            <td>
            <button onClick={()=>handleDelete}>Delete</button>
          </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Engine belt change</td>
            <td>1000</td>
            <td>
            <button onClick={()=>handleDelete}>Delete</button>
          </td>
          </tr>


          <tr>
            <td>5</td>
            <td>Brake disc change</td>
            <td>500</td>
            <td>
            <button onClick={()=>handleDelete}>Delete</button>
          </td>
          </tr>

        </tbody>
      </table>
      <Link to={'/addServices'}>
      <button type='submit' >add service</button>
      </Link>
     
    </div>
  );
};

export default ServiceList;