import React ,{useState,useEffect} from 'react'
import products1 from '../Images/Products1.png';
import {Link} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import useApi from '../hooks/useApi';
import * as api from "../api/Api";


const PopularProductsScreen = (props) => {

  const popularProducts = useApi(api.popularProducts);
  const [, setValues] = useState();

  const [products] = useState([
    {id:1,name:'Dslr',price:400, Image:products1},
    {id:2,name:'Microphone',price:35, Image:products1},
    {id:3,name:'Headphone',price:220, Image:products1},
    {id:4,name:'FancyShoes',price:70, Image:products1},
]);


useEffect(() => {
  async function fetchData() {
    try {
      const { data } = await popularProducts.request();
      data && console.log("get ", data);
      setValues(data);
    } catch (_) {}
  }
  fetchData();
  //eslint-disable-next-line
}, []);




    return (
        <>
         
<section className="product_section">
    <div className="custom_container">
      <div className="our_product_header">  
      <h3>Popular items</h3>
      <ul>
          <li><span><i className="far fa-gem"></i></span></li>
          <li><span><i className="far fa-gem"></i></span></li>
          <li><span><i className="far fa-gem"></i></span></li>
      </ul>
      <p>Lorem ipsum dolor sit amet<br/>
        consectetueradipiscing elit, sed diam nonummy nibh</p>
      </div>
      <div className="product_grid">
      {products.map((product)=>(
        <div className="product_card">
           <Link to="/link"> 
           <div className="figure">
            <img src={product.Image} alt="alt" />
           </div>
           <div className="product_detail">
            <h5>{product.name}</h5>
             <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
             <p>{product.price}</p>
            </div>
            </Link>  
        </div>
  ) )}
        
      </div>
    </div>
  </section>    
        </>
    )
}

export default PopularProductsScreen
