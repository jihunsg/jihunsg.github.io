import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './Routes';
import store from './store';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Provider>
  </BrowserRouter>
);

export default App;
