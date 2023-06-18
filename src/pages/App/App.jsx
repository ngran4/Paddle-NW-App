import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../Home/Home"
import userService from "../../utils/userService";


function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

// if user is logged in
  if (user) {
    return (
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path="/" element={<HomePage loggedUser={user} handleLogout={handleLogout} />} />
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
        </Routes>
      </MantineProvider>
    );
  }
// if user is not logged in
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
