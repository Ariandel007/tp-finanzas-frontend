import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Home from './_components/Home';
import SignUp from './_components/SignUp';

//REDUX
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <BrowserRouter>
    <Provider 
      store={store}
    >
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
        </Switch>
      </div>

      </Provider>

    </BrowserRouter>
  );
}

export default App;
