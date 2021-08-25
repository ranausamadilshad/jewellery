import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import FormikControl from './FormikControl'
import {
    Formik,
    Form,
  } from 'formik'
import * as Yup from 'yup';


const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  
  const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    submitProps.setSubmitting(false)
  }

const LoginScreen = () => {




    return (
        <>
  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
   <section className="login_section">
       <div className="login_container">
         <h2>Welcome To Jewellery</h2>
         <div className="login_form">
             <Form>
                 <div className="input_field">
                 <FormikControl
              control='input'
              type='email'
              name='email'
              placeholder="Email"
            />
            <FormikControl
              control='input'
              type='password'
              name='password'
              placeholder="Password"
            />
                 </div>
                 <div className="submit_btn">
                 <button type='submit' disabled={!formik.isValid}>Submit</button>
                 </div>
             </Form>
             <div className="sign_up_btn">
                 <span>Don't have an account?<Link to="/signup"> Sign Up Now</Link></span>
             </div>
             <div className="forgot_pass">
                <Link to="/forgetpassword"> Forgot password?</Link>
            </div>
         </div>
         <div className="policy_check">
             <p>By Clicking Login, you agree to our <Link to="/readme">Terms of Use</Link> and
                have read and acknowledge our <Link to="/readme">Privacy Policy</Link>.</p>
         </div>
       </div>
   </section>
   )
}} 
   </Formik>
        </>
    )
}

export default LoginScreen;
