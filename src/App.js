import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore, { history } from './redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './tailwind.css';
import Landing from './page/Landing';
const store = configureStore()

function App() {
  return (
   <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <BrowserRouter>
              <Switch>
                <Landing/>
              </Switch>
          </BrowserRouter>
        </Router>
      </ConnectedRouter>
   </Provider>
  );
}

// function App(){
//   return(
//     <Landing/>
//   )
// }

export default App;
