import React,{useState,useEffect} from 'react';
import './SpecialProduct.css';
import specialProduct from '../Images/Featured-img.jpg';
import {Link} from 'react-router-dom';
import useApi from '../hooks/useApi';
import * as api from "../api/Api";

const SpecialProductScreen = () => {


    const specialProducts = useApi(api.specialProducts);
    const [, setValues] = useState();

    useEffect(() => {
        async function fetchData() {
          try {
            const { data } = await specialProducts.request();
            data && console.log("get ", data);
            setValues(data);
          } catch (_) {}
        }
        fetchData();
        //eslint-disable-next-line
      }, []);


    return (
        <>
<section className="special_product">
    <div className="custom_container">
       <div className="special_product_section"> 
        <div className="special_product_figure">
          <img src={specialProduct} alt="Special Product"/>
        </div>
        <div className="special_product_detail">
            <h2>Featured Product</h2>
            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
            <h3>High Designer Jewellery</h3>
            <span className="stock">Availability:<Link to="/shop"> In stock</Link></span>
            <small><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small>
            <span className="price">101.00$</span>
            <Link className="purchase_special" to="/link">Purchase Now</Link>
         </div>
      </div>   
    </div>
</section>

        </>
    )
}

export default SpecialProductScreen;
