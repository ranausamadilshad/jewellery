import React from 'react'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import MyAccountPage from './Pages/MyAccountPage';
import WishListPage from './Pages/WishListPage';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MyCartPage from './Pages/MyCartPage';
import SingleProductPage from './Pages/SingleProductPage';
import ReadMePage from './Pages/ReadMePage';
import Admin from './Pages/Admin';

function App() {
  return (
    <>

<Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/singleproduct">
            <SingleProductPage/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route  path="/readme">
            <ReadMePage/>
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/mycart">
           <MyCartPage/>
          </Route>
          <Route path="/aboutus">
          <AboutUsPage/>
          </Route>
          <Route path="/contactus">
            <ContactUsPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/myaccount">
            <MyAccountPage />
          </Route>
          <Route path="/wishlist">
            <WishListPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
