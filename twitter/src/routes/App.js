import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../containers/Home';
import Main from './Main'

const routes = [
    path= '/',
    children= [
        {path:'/', element: <Navigate to='/' />},
        {path:'home', element: <Main/>},
    ],
    path='/home', 
    element= <Home/>

]

export default routes;