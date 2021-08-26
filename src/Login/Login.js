import React from 'react';
import LoginScreen from './LoginScreen';
import { useHistory } from "react-router-dom";
import useApi from '../hooks/useApi';
import * as api from "../api/Api";

const Login = () => {
    const history = useHistory();
    const { error, request } = useApi(api.loginUser);
  
    async function handleSubmit({ formValues }) {
      console.log("form", formValues);
      try {
        const { data } = await request({ ...formValues });
        localStorage.setItem("token", data.token);
        history.push("/journal");
      } catch (_) {}
    }
    console.log("error", error);
    return (
        <>
         <LoginScreen/>   
        </>
    )
}

export default Login
