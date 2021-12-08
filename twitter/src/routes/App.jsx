import React from "react";
import '../App.css';
import twit from '../styles/img/twit.jpg';
import google from '../styles/img/google.png';
import profile from '../styles/img/perfil.jpg';
function App() {
  return (
    <>
  <div className="container-fluid" >
    <div className="row">

      <div className="col-5">
        <img src={twit} alt="twit"  id='welcome-img' />
      </div>

      <div className="col-7 right ps-5">
        <div className="row">
          {/* <img src={icon} alt="icon" className="icon" /> */}
        </div>

        <div className="row">
          <h1 className="">Lo que está pasando ahora</h1>
        </div>
        <div className="row second-title">
         <h2>Únete a Twitter hoy mismo.</h2>
        </div>

        <div className="row ms-5">

          <div className="col-5">
          <div className="input-group mb-3 input-log-email rounded-pill">
            <span className="input-group-text "><img src={profile} className="input-log"/></span>
            <input type="text" className="form-control" placeholder="Sign In with Google" aria-label="Sign In with Google"/>
            <span className="input-group-text "><img src={google} className="input-log"/></span>
          </div>

        <div class="col-5">
            <input type="email" class="form-control rounded-pill" placeholder= {`${google}Register with Apple`} aria-describedby="emailHelp"/>
          </div>
        </div>

        </div>
        <div className="row">1</div>
      </div>
    </div>
  </div>
    </>
  )
}

export default App;