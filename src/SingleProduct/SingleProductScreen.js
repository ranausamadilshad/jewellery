import React from 'react';
import product1 from '../Images/singlep.jpeg';
import './SingleProduct.css';
import {
    Formik,
    Form 
  } from 'formik'
import * as Yup from 'yup';
import FormikControl from './FormikControl';



const dropdownColor = [
    { key: 'Color', value: '' },
    { key: 'red', value: 'red' },
    { key: 'white', value: 'white' },
    { key: 'green', value: 'green' }
  ]

  const dropdownSize = [
    { key: 'Size', value: '' },
    { key: 'sm', value: 'sm' },
    { key: 'md', value: 'md' },
    { key: 'lg', value: 'lg' }
  ]



const initialValues = {
    color: '',
    size: '',
    quantity: '',
  }

  const validationSchema = Yup.object({
    color: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
    quantity: Yup.number().required('Required'),
  })

  const onSubmit = values => {
    console.log('Form data', values)
    // console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }






const SingleProductScreen = () => {

  
    return (

        <>

<Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (



           <section className="single_product_detail_section">
    <div className="custom_container">
        <div className="single_product_detail">
            <div className="single_product_figure">
               <img src={product1} alt="Img"/>
            </div>
            <Form className="single_product_data">
                 <h3>High Designer Jewellery</h3>
                 <div className="rating_fields">
                     <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                     <span><h5>(3)</h5> Reviews</span>
                     <span>Add a Review</span>
                 </div>
                 <p>Morbi mollis vestibulum sollicitudin. in eros a justo facilisis rutrum. Aenean id ullamcorper libero.
                      tempor et purus vitae, consectetur varius nunc.</p>
                
                 <h5>Availability  : <strong>In stock</strong></h5>        
                 <h5>Tags :  <strong>Fashion, Jewellery, Classic</strong></h5>    

                 <div className="size_color_filels">
                     <div className="size_color">
                         <label>Material</label>
                          {/* <select>
                              <option selected disabled>color</option> 
                             <option selected >white</option>
                             <option selected >orange</option>
                             <option selected >black</option>
                         </select>  */}

         <FormikControl
            control='select'
            name='color'
            options={dropdownColor}
          />
                     </div>
                     <div className="size_color">
                        <label>size</label>
                        {/* <select>
                            <option selected disabled>size</option>
                            <option selected >sm</option>
                            <option selected >md</option>
                            <option selected >lg</option>
                        </select> */}
            <FormikControl
            control='select'
            name='size'
            options={dropdownSize}
          />
                    </div>
                 </div>

                 <div className="size_color_filels">
                    <div className="size_color">
                     
        <FormikControl
            control='input'
            type='input'
            name='quantity'
          />
                    </div>
                    <div className="size_color">
                      {/* <button>Add to Cart</button> */}
                      <button type='submit'>Add to Cart</button>
                   </div>
                </div>

            </Form>
        </div>
    </div>
</section> 
  )}
  </Formik>
        </>
    )
}

export default SingleProductScreen;
