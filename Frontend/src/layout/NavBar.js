import React from 'react'

export default function 
() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><img src='https://s3-eu-west-1.amazonaws.com/tpd/logos/606f2a6f4e740b00013993e1/0x0.png' height={50} width={150} ></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      {/* <li class="nav-item active">
        <a class="nav-link" href="/signUp">SignUp</a>
      </li> */
      }

<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           SignUp
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/signUp">As Customer</a></li>
            <li><a class="dropdown-item" href="/signUpEmp">As Employee</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
     <li class="nav-item">
        <a class="nav-link" href="/signIn">SignIn</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="/signIn2">SignIn2</a>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link" href="/aboutus">About Us</a>
      </li> */}
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/contactUs">Contact Us</a></li>
            <li><a class="dropdown-item" href="/aboutus">About Us</a></li>
          </ul>
        </li>
      </ul>
    </div>
    </ul>
  </div>
</nav>
 </div>
  )
}
