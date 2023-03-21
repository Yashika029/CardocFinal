import React, { useEffect, useState } from 'react';
import { signUp } from '../Services/user_service';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


function App() {

  const [data, setData]= useState({
    fName: '',
    lName: '',
    phoneNo: '',
    email: '',
    pwd: '',
  })

  // const [error, setError]=useState({
  //   errors:{},
  //   isError:False
  // })
  
useEffect(() => {
  console.log(data);
},[data])

const navigate = useNavigate();

const handleRegister=(event)=>{
  event.preventDefault()
  signUp(data).then((resp)=>{
    console.log(resp);
    console.log("Success log");
    toast.success("Registered Successfully !!");
    navigate('/signIn')

  }).catch((error)=>{
    console.log(error);
    console.log("Error log");
  })
}

const handlerChange=(event, property)=>{
  setData({...data, [property]: event.target.value})

}

  return (
    <MDBContainer fluid>

      {/* { JSON.stringify(data)} */}
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
        <form
          onSubmit={handleRegister}
          style={{ marginTop: "0px", padding: "0px 0px" }}
          id="form1">
             
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><h1>SignUp</h1></p>

    
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='FirstName' id='form1' type='text' className='w-100' onChange={(e)=> handlerChange(e, 'fname')}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='LastName' id='form1' type='text' className='w-100' onChange={(e)=> handlerChange(e, 'lname')}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Contact' id='form1' type='text' maxlength="10" className='w-100' onChange={(e)=> handlerChange(e, 'phoneNo')}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Email' id='form2' type='email' onChange={(e)=> handlerChange(e, 'email')}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={(e)=> handlerChange(e, 'pwd')}/>
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
              

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://img.freepik.com/free-vector/auto-mechanic-repairing-vehicle-engine-isolated-flat-vector-illustration-cartoon-man-fixing-checking-car-with-open-hood-garage_74855-8227.jpg' fluid/>
            </MDBCol>

          </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
  }

export default App;