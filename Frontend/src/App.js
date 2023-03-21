
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React,{useState} from 'react';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import SignUpEmp from './Auth/SignUpEmp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServiceList from './pages/ServiceList';
import CarRegistration from './pages/CarRegistration';
import ServiceListCust from './pages/ServiceListCust';
import AddServices from './pages/AddServices';
import Appointment from './Appt/Appointment';
//import SignIn2 from './Auth/SignIn2';

function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signUpEmp' element={<SignUpEmp/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/serviceList' element={<ServiceList/>}></Route>     
        <Route path='/car' element={<CarRegistration/>}></Route>
        <Route path='/serviceCust' element={<ServiceListCust/>}></Route>
        <Route path='/addServices' element={<AddServices/>}></Route>
        <Route path='/app' element={<Appointment/>}></Route>
        {/* <Route path='/signIn' element={<SignIn2/>}></Route> */}
        


      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
