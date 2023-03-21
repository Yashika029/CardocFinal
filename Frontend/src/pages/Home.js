import React from 'react'
import './Home.css';

export default function Home() {


  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="http://gwrench.com/wp-content/uploads/2020/12/VistaCarService.jpg" height={600} width={600} class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Car Servicing & Repairs</h5>
              <p>STATE OF THE ART CAR SERVICE STATION</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://img.freepik.com/premium-photo/mechanic-works-engine-car-garage-repair-service-concept-car-inspection-service-car-repair-service_545582-3.jpg" height={600} width={1075} class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Trusted Advisor For Your Car</h5>
              <p>FREE CAR INSPECTION</p>
            </div>
          </div>
          <div class="carousel-item" >
            <img src="https://guardian.ng/wp-content/uploads/2018/04/car-maintenance.jpg" height={600} width={1075} class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First Time In Pune</h5>
              <p>Complete Car Servicing</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <section class="features">
          <h3 class="secTitle">Trust, Experience,</h3>
          <h3 class="secTitle">Convenience</h3>
          <p>
            "   We have the expertise to repair your car hassle-free. Just book online,
            and our team will take care of the rest. Our mechanics are qualified and
            equipped with the latest technology that allows them to work on different types of
            cars regardless of their make or model."
          </p>
          <img src="https://demyto.com/HTML/images/Mechanics.png" alt="cardoc services" height={300} width={10}></img>
        </section>
      </div>
  

      <div>
        <footer class="footer">

          <p class="logo">
            <img src="https://www.cardoc.ltd.uk/wp-content/uploads/2018/07/mainlogo.png" class="responsive-image" alt="alt text" height={100} width={200}></img>
          </p>
          <script type='text/javascript' src="https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg"></script>
          <div class="container">
            <div class="row">
              <div class="snsShare">
                <ul>
                  <li>
                    <a href="CarDoc@gmail.in" target="_blank" class="youtube" onClick="partner(this)" aria-label='title'>Email</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/hyundai-motor-india-ltd" target="_blank" class="linked" onClick="partner(this)" aria-label='title'>Linkedin</a>
                  </li>

                  <p>
                    <li>
                      <a href="/contactus" aria-label='title'>Contact Us</a>
                    </li>

                    <li>
                      <a href="/aboutus" aria-label='title'>About Us</a>
                    </li>
                  </p>
                </ul>
              </div>

              <div class="tabC">
                <p class="copyright">Copyright 2023 CarDoc Automotive. All Rights Reserved.</p>
                <p class="etc_ban">
                  " "
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>

  )
}
