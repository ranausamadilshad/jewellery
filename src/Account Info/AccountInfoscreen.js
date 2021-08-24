import React from 'react';
import './AccountInfo.css'
import {Link} from 'react-router-dom';

const AccountInfoscreen = () => {
    return (
        <>
           <section className="sign_up_section">
       <div className="signup_container">
         <h2>Create Your account</h2>
         <div className="signup_main">
         <div className="signup_form">
             <form>
                 <div className="business_input_field">
                    <label>Business Name <span>*</span></label>   
                 <input type="text" placeholder="Business Name"/>
                 </div>
                 <div className="signup_input_field">
                    <div className="input_field">
                        <label>First Name <span>*</span></label> 
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="input_field">
                        <label>Last Name <span>*</span></label> 
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="input_field">
                        <label>Email Address <span>*</span></label> 
                        <input type="email" placeholder="Email Address"/>
                    </div>
                    <div className="input_field">
                        <label>Mobile <span>*</span></label> 
                        <input type="number" placeholder="Mobile"/>
                    </div>
                 </div>
                 <div className="submit_btn">
                 <button type="submit">Create New Account</button>
                 </div>
             </form>
             <div className="sign_up_btn">
                 <span>Already have an account?<Link to="/login"> Login Here</Link></span>
             </div>
             <div className="policy_check">
                <p>By signing up, you agree to our <Link to="/terms"> Terms of Use</Link> and have read and acknowledge our <Link to="/privacypolicy"> Privacy Policy</Link>.</p>
            </div>
         </div>
        </div>
       </div>
   </section> 
        </>
    )
}

export default AccountInfoscreen
