import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';

import "bootstrap/dist/css/bootstrap.css";
import './Assets/fonts/Montserrat-Black.ttf';
import './style.scss';

import  MainLayout  from "./containers/MainLayout/MainLayout";
import  Home from "./containers/Home/Home";
import  Faq  from "./components/Faq/Faq";
import  Terms  from "./components/Terms/Terms";
import  Contact  from "./components/Contact/Contact";
import  Product  from "./components/Product/Product";
import  Cart  from "./components/Cart/Cart";
import  Error  from "./components/Error/Error";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
      <Provider store={store}>
        <MainLayout>
          <Switch >
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/terms"} component={Terms} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/product"} component={Product} />
            <Route exact path={"/cart"} component={Cart} />
            <Route component={Error} />
          </Switch>
        </MainLayout>
      </Provider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);