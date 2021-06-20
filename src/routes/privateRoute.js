import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ token, component: Component, ...props }) => {

    const authenticated = !!token;

    return (
        <Route { ...props }
            render={ props => !authenticated ?
                <Redirect to="/"></Redirect> 
                :
                <Component { ...props }></Component>
            }
        ></Route>
    );
}

export default PrivateRoute;