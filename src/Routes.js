import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './Components';
// import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  
} from './Views';

const Routes = () => {
  return (
    <Switch>
     
      <Route path="/">
            <HomeView />
      </Route>
      {/* <RouteWithLayout
        component={HomeView}
        exact
        layout=""
        path="/"
      /> */}
      {/* <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      /> */}
      
      {/* <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default Routes;