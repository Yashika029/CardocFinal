import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [formData, setFormData] = useState({
    appdate: '',
    apptime: '',
    billamount: '',
    status: '',
    car: {
      brand: '',
      model: '',
      fuel: '',
      plateno: '',
      mfgyear: ''
    }
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCarInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      car: {
        ...prevState.car,
        [name]: value
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/appointments', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const styles = {
    backgroundImage: `url('https://th.bing.com/th/id/R.166e418323d8cb55bf651f3ec815c1bb?rik=p1zpkk1sKnF8WQ&riu=http%3a%2f%2fi2.cdn.turner.com%2fcnnnext%2fdam%2fassets%2f160212164355-bodywork-designed-by-figoni--falaschi-delahaye-135m-competition-coupe-super-169.jpg&ehk=fgUhKuaaBlDJD7kWlsa1c1nKcU0F291qqBY3LcGxbd0%3d&risl=&pid=ImgRaw&r=0')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',  
  };

  return (

   <div style={styles}>
    <form onSubmit={handleSubmit} >
       
       <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="appdate" style={{marginRight:"3%"}}>Appointment Date:</label>
      <input  className='appointment-form' type="date" id="appdate" name="appdate" value={formData.appdate} onChange={handleInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="apptime" style={{marginRight:"3%"}}>Appointment Time:</label>
      <input className='appointment-form' type="time" id="apptime" name="apptime" value={formData.apptime} onChange={handleInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="billamount" style={{marginRight:"3%"}}>Bill Amount:</label>
      <input className='appointment-form' type="number" id="billamount" name="billamount" value={formData.billamount} onChange={handleInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="status" style={{marginRight:"3%"}}>Status:</label>
      <input className='appointment-form' type="text" id="status" name="status" value={formData.status} onChange={handleInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="brand" style={{marginRight:"3%"}}>Car Brand:</label>
      <input className='appointment-form' type="text" id="brand" name="brand" value={formData.car.brand} onChange={handleCarInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label  className='appo' htmlFor="model" style={{marginRight:"3%"}}>Car Model:</label>
      <input  className='appointment-form' type="text" id="model" name="model" value={formData.car.model} onChange={handleCarInputChange} />
      </div>

      <div style={{display:"flex", justifyContent:"center"}}>
      <label className='appo' htmlFor="fuel" style={{marginRight:"3%" }}>Fuel Type:</label>
      <input className='appointment-form' type="text" id="fuel" name="fuel" value={formData.car.fuel} onChange={handleCarInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="plateno" style={{marginRight:"3%"}}>License Plate Number:</label>
      <input className='appointment-form' type="text" id="plateno" name="plateno" value={formData.car.plateno} onChange={handleCarInputChange} />
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
      <label className='appo' htmlFor="mfgyear" style={{marginRight:"3%"}}>Manufacturing Year:</label>
      <input className='appointment-form' type="number" id="mfgyear" name="mfgyear" value={formData.car.mfgyear} onChange={handleCarInputChange} />
     </div>
     <Link to={'/serviceCust'}>
      <button type="submit" className='blue-button '>Submit</button>
      </Link>
     
    </form>
    </div>
    
  );
};

export default Appointment;
