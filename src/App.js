import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import Home from './_components/Home';
import SignUp from './_components/SignUp';
import Receipt from './_components/Receipt';
import Historial from './_components/Historial';
import BarButton from "./_components/BarButton";
import PrivateRoute from './routes/privateRoute';
import PrivateRoutePostLogin from './routes/privateRoutePostLogin';

import { tokenAuth } from './config/token';

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import ViewReceipt from './_components/ViewReceipt';


function App() {
  const sideNavRef = React.useRef();

  const openSideNav = () => sideNavRef.current.style.width = "250px";
  const closeSideNav = () => sideNavRef.current.style.width = "0px";



  const [token, setToken] = useState(localStorage.getItem('token-receipt'));

  const tokenExpired = (jwtbearer) => {
    if (jwtbearer != null) {
      const token = jwtbearer.replace("Bearer ", "");
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date()).getTime() / 1000)) >= expiry;  
    } else {
      return true;
    }
  }

  const isExpiredToken = tokenExpired(token);


  const logout = () => {
    sideNavRef.current.style.width = "0px";
    localStorage.removeItem('token-receipt');
    tokenAuth(null);
  }

  useEffect(() => {
    if (!isExpiredToken) {
      tokenAuth(token);
    } else {
      localStorage.removeItem('token-receipt');
      tokenAuth(null);
    }
  }, [isExpiredToken, token])

  return (
    <BrowserRouter>
    <Provider 
      store={store}
    >
    <BarButton openSideNav={openSideNav} token={token} setToken={setToken}></BarButton>

      <div className="container">
      
        <Switch>
          <PrivateRoutePostLogin exact path="/" component={Home}></PrivateRoutePostLogin>
          <PrivateRoutePostLogin exact path="/sign-up" component={SignUp}></PrivateRoutePostLogin>
          <PrivateRoute exact path="/receipt" token={token} component={Receipt}></PrivateRoute>
          <PrivateRoute exact path="/receiptselected/:idReceipt" token={token} component={ViewReceipt}></PrivateRoute>
          <PrivateRoute exact path="/historial" token={token} component={Historial}></PrivateRoute>
        </Switch>

  
        <div id="mySidenav" className="sidenav" ref={sideNavRef}>
              <h2 onClick={closeSideNav} className="ml-3 selectable header-title">☰</h2>
              <Link className="header-title my-2 colornav" to={'/receipt'} onClick={closeSideNav}>Inicio</Link>
              <Link className="header-title my-2 colornav" to={'/historial'} onClick={closeSideNav}>Historial</Link>
              <Link className="header-title my-2 colornav" to={'/'}  onClick={logout}>Cerrar Sesión</Link>
        </div>

      </div>

      </Provider>

    </BrowserRouter>
  );
}

export default App;
