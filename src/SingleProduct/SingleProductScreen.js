import React from 'react';
import product1 from '../Images/singlep.jpeg';
import './SingleProduct.css';
const SingleProductScreen = () => {
    return (
        <>
           <section className="single_product_detail_section">
    <div className="custom_container">
        <div className="single_product_detail">
            <div className="single_product_figure">
               <img src={product1} alt="Img"/>
            </div>
            <div className="single_product_data">
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
                         <select>
                             <option selected disabled>color</option>
                         </select>
                     </div>
                     <div className="size_color">
                        <label>size</label>
                        <select>
                            <option selected disabled>size</option>
                        </select>
                    </div>
                 </div>

                 <div className="size_color_filels">
                    <div className="size_color">
                     
                       <input type="number" />
                    </div>
                    <div className="size_color">
                      <button>Add to Cart</button>
                   </div>
                </div>

            </div>
        </div>
    </div>
</section> 
        </>
    )
}

export default SingleProductScreen;
