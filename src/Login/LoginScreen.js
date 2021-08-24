import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

const LoginScreen = () => {
    return (
        <>
   <section className="login_section">
       <div className="login_container">
         <h2>Welcome To Jewellery</h2>
         <div className="login_form">
             <form>
                 <div className="input_field">
                 <input type="email" placeholder="Email"/>
                 <input type="password" placeholder="Password"/>
                 </div>
                 <div className="submit_btn">
                 <button type="submit">Login</button>
                 </div>
             </form>
             <div className="sign_up_btn">
                 <span>Don't have an account?<Link to="/signup"> Sign Up Now</Link></span>
             </div>
             <div className="forgot_pass">
                <Link to="/forgetpassword"> Forgot password?</Link>
            </div>
         </div>
         <div className="policy_check">
             <p>By Clicking Login, you agree to our <Link to="/terms">Terms of Use</Link> and
                have read and acknowledge our <Link to="/privacypolicy">Privacy Policy</Link>.</p>
         </div>
       </div>
   </section> 
        </>
    )
}

export default LoginScreen;
