import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { signIn } from '../Services/user_service';
import { useNavigate } from 'react-router-dom';


export default function App2() {

  const [login, setLogin]= useState({
 
   email:'',
 
   pwd:''
 })

 const navigate = useNavigate();
 
  
  const handlerChange=(event, field)=>{
 
   let actualValue=event.target.value
 
   setLogin({
 
     ...login,[field]:actualValue
 
   })
 
  }
 
 
  const handlerFormSubmit=(event)=>{
 
   event.preventDefault();
 
   console.log(login);
 
   if(login.email?.trim()=== "" || login.password?.trim()==="")
 
   {
 
     toast.error("Email or Password required");
 
     return;
 
   }
  }
 
  
 
   signIn(login).then((response)=>{
 
     console.log(response);
 
     //save the data to localstorage
 
    //  doLogin(response ,()=>{
 
    //    console.log("login detail is saved to localstorage")

       console.log("Success login");
       toast.success("login Successfully !!")
       navigate('/app')

 
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

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <form
          onSubmit={handlerFormSubmit}
          style={{ marginTop: "0px", padding: "0px 0px" }}
          id="form1">
      <MDBRow>
      <p className='text-center text-ml-start mr-4 pr-2'><h1>Login</h1></p>


        <MDBCol col='10' md='6'>
          <img src="https://media.istockphoto.com/id/1353185042/vector/professional-automobile-maintenance-and-service-application-car-repair-app-concept.jpg?s=170667a&w=0&k=20&c=LhJb-I1ev1kQfGINWG34fU7Ce2WfRAELqn_ZHmlloNM=" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" value={login.Email} onChange={(e)=>handlerChange(e,'email')}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={login.Password} onChange={(e)=>handlerChange(e,'pwd')}/>

          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signUp" className="link-danger">SignUp</a></p>
          </div>

        </MDBCol>

      </MDBRow>
      </form>
    </MDBContainer>
  )
}


