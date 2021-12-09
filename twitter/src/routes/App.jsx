import React from "react";
import * as yup from 'yup';
import Footer from '../components/Footer';
//style
import "../App.css";


//img
import twit from "../styles/img/twit.jpg";
import google from "../styles/img/google.png";
import profile from "../styles/img/perfil.jpg";
import icon from '../styles/img/logo.jpg';


function App() {

const validation = {
  email: yup.string().email().required('Email is required')
  .max(50, 'Email must be 50 characters or less')
  .min(5, 'Email must be 5 characters or more'),
}
const {signGoogle, signApple} = validation;
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-5 img-left">
            <img src={twit} alt="twit" id="welcome-img" />
          </div>

          <div className="col-7 right ps-5 ">
            <div className="row m-5">
              <img src={icon} alt="icon" className="icon" />
            </div>

            <div className="row">
              <h1 className="">Lo que está pasando ahora</h1>
            </div>
            <div className="row second-title">
              <h2>Únete a Twitter hoy mismo.</h2>
            </div>

           
            <div className="col-5">
              <form value= {validation}>
              <div className="input-group mb-5 input-log-email rounded-pill">
              <span className="input-group-text ">
                    <img src={profile} className="input-log" />
                  </span>
                  <input
                    id="input_google"
                    type="email"
                    {...signGoogle}
                    className="form-control"
                    placeholder="Sign In with Google"
                    aria-label="Sign up with Google"
                  />
                  <span className="input-group-text ">
                    <img src={google} className="input-log" />
                  </span>
                </div>


                  <input
                    {...signApple}
                    type="email"
                    className="form-control rounded-pill "
                    id='apple-input'
                    placeholder="Sign up with Apple"
                    />
              </form>

              <div className="col-5 m-4 ">
                <span className='line'>_____________________</span>
                <span className='line1'>O</span>
                <span className='line'>___________________</span>
              </div>

              <div className="">
                <input
                      {...signApple}
                      type="email"
                      className="form-control rounded-pill bg-primary input-number mb-3"
                      id='apple-input'
                      placeholder="Sign up with Cellphone Number..."
                      
                      />
              
               <span className='text-register link-light'>By registering, you accept the Terms of Service and the Privacy Policy, including the Policy on the Use of Cookies.</span>
                </div>

            </div>
            <div className="row mt-5">
                <h3> Do you already have an account?</h3>
              <div className="col-5 btn-signin mt-5 mb-5">
                <button type="button" class="btn btn-outline-secondary rounded-pill ">Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
