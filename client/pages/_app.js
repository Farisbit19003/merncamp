import { UserProvider } from "../context";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';
import '../public/css/style.css';
function MyApp({Component,pageProps}){
    return (
        <UserProvider>
        
        <Nav/>
        <ToastContainer position="top-center"/>
        <Component{...pageProps}/>
        </UserProvider>
)}
export default MyApp;