import React from 'react';
import {Route} from 'react-router';
import Header from '../Components/Header/Header';



export const HomeTemplate = (props) => {
    let {Component, ...restRoute} = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
           <Header />
           <Component {...propsRoute} />
        </div>
    }} />
}