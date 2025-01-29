import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MyProfile from './../pages/MyProfile/MyProfile';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AboutUs from '../pages/AboutUs/AboutUs';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import PrivetRoute from './PrivetRoute';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout /> ,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: () => fetch('/service.json')
            },
            {
                path: 'myProfile',
                element: <PrivetRoute >
                    <MyProfile ></MyProfile>
                </PrivetRoute>,
            }, {
                path: 'details/:id',
                element: <PrivetRoute >
                    <DetailsPage ></DetailsPage>
                </PrivetRoute>,
                loader: () => fetch('/service.json')
            },
            {
                path: 'login',
                element: <Login ></Login>
            },
            {
                path: 'register',
                element: <Register ></Register>
            },
            {
                path: 'forgotPass',
                element: <ForgotPassword ></ForgotPassword>
            },
            {
                path: 'aboutUs',
                element: <PrivetRoute >
                    <AboutUs ></AboutUs>
                </PrivetRoute>,
                loader: () => fetch('/counselor.json')
            }
        ]
    }
])

export default routers
