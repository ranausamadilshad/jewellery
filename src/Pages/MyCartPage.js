import React from 'react';
import CustomBanner from '../CustomBanner/CustomBanner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ProductCart from '../ProductCart/ProductCart';

const MyCart = () => {
    return (
        <>
        <Navbar/>
        <CustomBanner pname="My Cart"/>
        <ProductCart/>
        <Footer/>
        </>
    )
}

export default MyCart
