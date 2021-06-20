import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutePostLogin = ({ token, component: Component, ...props }) => {

    const authenticated = !token;

    return (
        <Route { ...props }
            render={ props => !authenticated ?
                <Redirect to="/historial"></Redirect> 
                :
                <Component { ...props }></Component>
            }
        ></Route>
    );
}

export default PrivateRoutePostLogin;