import React from 'react';
import CustomBanner from '../CustomBanner/CustomBanner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MyAccountPage = () => {
    return (
        <>
         <Navbar/>
         <CustomBanner pname="My Account"/>
         <Footer/> 
        </>
    )
}

export default MyAccountPage ;
