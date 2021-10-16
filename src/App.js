import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthContext from "./store/auth-context";

function App() {
  const ctxAuth = useContext(AuthContext);

  return (
    <Layout>
      {ctxAuth.logInNow && <Login />}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {ctxAuth.isLoggedIn && (
          <Route path="/profile">
            <ProfilePage />
          </Route>
        )}
		    <Route path="*" >
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
