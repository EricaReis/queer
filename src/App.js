import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import About from 'views/About';
import Home from 'views/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';

import './global.scss'
const routes = [{path:'/', name: 'Home'}, {path:'/sobre', name: 'Sobre'}];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={About} />
      </Switch>
      <Footer routes={routes}/>
    </BrowserRouter>
  );
}

export default App;
