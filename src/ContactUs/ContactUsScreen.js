import React from 'react'
import './ContactUs.css';
// import {Link} from 'react-router-dom';

const ContactUsScreen = () => {
    return (
        <>
<section className="contact_us_section">
       <div className="contact_us_container">
         <h2>Contact Us</h2>
         <div className="contact_us">
         <div className="contact_us_form">
             <form>
                
                 <div className="contact_us_field">
                    <div className="input_field">
                        <label>Full Name <span>*</span></label> 
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="input_field">
                        <label>Organization Name</label> 
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="input_field">
                        <label>Email Address <span>*</span></label> 
                        <input type="email" placeholder="Email Address"/>
                    </div>
                    <div className="input_field">
                        <label>Phone Number <span>*</span></label> 
                        <input type="number" placeholder="Mobile"/>
                    </div>
                 </div>
                 <div className="message_input_field">
                    <label>Message <span>*</span></label>   
                     <textarea></textarea>
                 </div>
                 <div className="submit_btn">
                 <button type="submit">Send Message</button>
                 </div>
             </form>
            
         </div>
        </div>
       </div>
   </section>
        </>
    )
}

export default ContactUsScreen
