---
title: 'Managing Private and Public Routes in React'
date: 'Jan 16, 2022'
description: 'Learn how to create Private, Public and Restricted route with react router'
cover_image: '/images/react-crash-course.jpg'
category: 'React'
author: 'Stefan Dj.'
author_image: '/images/stefan.jpg'
---

React Router is a fully-featured client and server-side routing library for React. It enables the navigation among views in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.

In this blog post we'll learn how to build **private** and **public** routes in react using react router, and also using props to **restrict** authenticated users for accessing some routes.

For demonstrationg purposes, we'll use an react aplication with following components:

1. Home Page: a **public** route that is accessable by anyone.
2. User Page: a **private** route that is only accessable by authenticated user.
3. Login Page: basicly a public route, but **restricted** for authenticated user, since there is no point in showing this page to user who already pass the auth process.


## Private Route

PrivateRoute component is a model, as a wrapper for all private routes in our application. The logic inside the component goes like this: If the user is authenticated go and render the component which is passed as a prop, otherwise, redirect the user to the login page. Additionally, we imported a function for checking if a user is authenticated from the utils folder. You can implement your own logic there since that's out of scope for this tutorial.

```javascript
import React from 'react';
 import { Route, Redirect } from 'react-router-dom';
 import { isUserAuth } from './utils'

 const PrivateRoute = ({ component: Component, ...rest }) => {   

  return (
    <Route
      {...rest}
      render={(props) => isUserAuth ? <Component {...props} /> : <Redirect to="/login" />}
    />
  );
 };

 export default PrivateRoute;
```

## Public Route

PublicRoute, on the other hand, is the layout for all the public routes, including restricted ones. The difference between public and restricted is in the `restrictedForAuth` prop. If the prop is set to `true`, the route is restricted for the authenticated user, else it is public.

```javascript
import React from 'react';
 import { Route, Redirect } from 'react-router-dom';
 import { isUserAuth } from './utils'

 const PublicRoute = ({ component: Component, restrictedForAuth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => (
        isUserLogged && restrictedForAuth
          ? <Redirect to="/" />
          : <Component {...props} />
      )}
    />
  );
 };

export default PublicRoute;
```

## All together in the App.js

Finally, we can wrap up everything in the App.js file:

```javascript
// -- App.js --
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import Home from './views/Home';
import User from './vies/User';
import Login from './views/Login';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute exact component={Home} path="/" />
          <PublicRoute exact restricted component={Login} path="/login" />
          <PrivateRoute exact component={User} path="/user" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

```