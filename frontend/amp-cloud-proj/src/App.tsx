//import { useState } from 'react'
//import {Heading, Button, View} from '@aws-amplify/ui-react';
//import './App.css'
import {
  withAuthenticator,
  Button,
  Heading,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";

type AppProps = {
  signOut?: UseAuthenticator["signOut"];
  user?: AuthUser;
};

const App: React.FC<AppProps> = ({ signOut, user }) => {
  // Handling case when user is not available yet
  const userName = user ? user.username : "Guest";

  /*
  <View className="App" padding="medium">
    <Heading level={3}>Hello World {userName} HI  dfd</Heading>
    <Button onClick={signOut} variation="primary">Sign Out</Button>
  </View>
  */
  return (
    <div className="App">
      <View className="App" padding="medium">
        <Button onClick={signOut} variation="primary">
          Sign Out
        </Button>
      </View>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default withAuthenticator(App);
