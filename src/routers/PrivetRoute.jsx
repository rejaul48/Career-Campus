import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { CareerContext } from '../contextApi/CareerContext';
import Loader from '../components/Loader/Loader';

const PrivetRoute = ({children}) => {
    const { user, loader } = useContext(CareerContext);
    // find location
    const location = useLocation()
   
    if (loader) {
        return <Loader ></Loader>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>
}


export default PrivetRoute
