import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import Home from './_components/Home';
import SignUp from './_components/SignUp';
import Receipt from './_components/Receipt';
import Historial from './_components/Historial';

import { tokenAuth } from './config/token';

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import ViewReceipt from './_components/ViewReceipt';


function App() {
  const sideNavRef = React.useRef();

  const openSideNav = () => sideNavRef.current.style.width = "250px";
  const closeSideNav = () => sideNavRef.current.style.width = "0px";

  const tokenExpired = (jwtbearer) => {
    if (jwtbearer != null) {
      const token = jwtbearer.replace("Bearer ", "");
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date()).getTime() / 1000)) >= expiry;  
    } else {
      return true;
    }
  }

  const token =  localStorage.getItem('token-receipt');

  const isExpiredToken = tokenExpired(token);


  if (!isExpiredToken) {
    tokenAuth(token);
  } else {
    localStorage.removeItem('token-receipt');
    tokenAuth(null);
  }


  return (
    <BrowserRouter>
    <Provider 
      store={store}
    >
      <div className="col-2 selectable"><h2 onClick={openSideNav} className="header-title">☰</h2></div>

      <div className="container">
      
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
          <Route exact path="/receipt" component={Receipt}></Route>
          <Route exact path="/receiptselected/:idReceipt" component={ViewReceipt}></Route>
          <Route exact path="/historial" component={Historial}></Route>
        </Switch>

        <div id="mySidenav" className="sidenav" ref={sideNavRef}>
          <h2 onClick={closeSideNav} className="ml-3 selectable header-title">☰</h2>
          <Link className="header-title my-2 colornav" to={'/receipt'} onClick={closeSideNav}>Inicio</Link>
          <Link className="header-title my-2 colornav" to={'/historial'} onClick={closeSideNav}>Historial</Link>
          <Link className="header-title my-2 colornav" to={'/'}  onClick={closeSideNav}>Cerrar Sesión</Link>
        </div>

      </div>

      </Provider>

    </BrowserRouter>
  );
}

export default App;
