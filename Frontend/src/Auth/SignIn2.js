import React, {useState} from 'react';

import {MDBContainer, MDBCol, MDBRow, MDBBtn,  MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

import { toast } from 'react-toastify';

import { signIn2 } from '../Services/user_service';

import { doLogin } from './IsAuth.js';


export default function SignIn2() {

 const [login, setLogin]= useState({

  email:'',

  password:''
})

 
 const handlerChange=(event, field)=>{

  let actualValue=event.target.value

  setLogin({

    ...login,[field]:actualValue

  })

 }

 

 const handlerFormSubmit=(event)=>{

  event.preventDefault();

  console.log(login);

  if(login.email.trim()=== "" || login.password.trim()==="")

  {

    toast.error("Email or Password required");

    return;

  }

 

  signIn2(login).then((response)=>{

    console.log(response)

    //save the data to localstorage

    doLogin(response ,()=>{

      console.log("login detail is saved to localstorage")

     

    })

   

    console.log("Success login");

    toast.success("login Successfully !!")

   

  }).catch((error)=>{

    console.log(error);

    console.log("Error log");

    if(error.response.status===400  || error.response.status===404)

    {

      toast.error(error.response.data.message)

    }

    else

    {

      toast.error("something went wrong on server !!")

    }

  })

 

 }

 

  return (

    <MDBContainer fluid className="p-3 my-5 h-custom">

       <form

          onSubmit={handlerFormSubmit}

          style={{ marginTop: "0px", padding: "0px 0px" }}

          id="form1">

      <MDBRow>

      <div style={{display:"flex", marginBottom:"3%", justifyContent:"center"}}>

        <h1>Login</h1>

      </div>

 

        <MDBCol col='10' md='6' style={{width:"44% !important"}}>

          <img src="https://media.istockphoto.com/id/1353185042/vector/professional-automobile-maintenance-and-service-application-car-repair-app-concept.jpg?s=170667a&w=0&k=20&c=LhJb-I1ev1kQfGINWG34fU7Ce2WfRAELqn_ZHmlloNM=" class="img-fluid" alt="Sample image" />

        </MDBCol>

 

        <MDBCol col='4' md='6'>

          <div style={{display:"flex"}}>

            <label style={{marginRight:"10%"}}>Email</label>

            <MDBInput style={{width:"235%"}} wrapperClass='mb-4'  id='formControlLg' type='email' size="lg" value={login.email} onChange={(e)=>handlerChange(e,'Email')}/>

           

          </div>

          <div style={{display:"flex"}}>

          <label style={{marginRight:"6%"}}>Password</label>

            <MDBInput style={{width:"235%"}} wrapperClass='mb-4' id='formControlLg' type='password' size="lg" value={login.password} onChange={(e)=>handlerChange(e,'Password')}/>

          </div>

          <div className="d-flex justify-content-between mb-4">

            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />

            <a href="!#">Forgot password?</a>

          </div>

 

          <div className='text-center text-md-start mt-4 pt-2'>

            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>

            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signUp" className="link-danger">SignUp</a></p>

          </div>

 

        </MDBCol>

 

      </MDBRow>

      </form>

    </MDBContainer>

  );

}

 

