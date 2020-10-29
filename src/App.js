import React from "react";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";
import HomePage from "./view/pages/HomePage";
import NotePage from "./view/pages/NotePage";
import DashBoardPage from "./view/pages/DashBoardPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from "./view/components/shared/NavigationBar";
import DashBoardNotesPage from "./view/components/DashboardPage/DashBoardNotesPage";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App() {

  return (

    
    <UserProvider>
      <Application/>
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/auth" component={HomePage}/>
        <Route path="/note" component={NotePage}/>
        
        <Route path="/dashboard" exact component={DashBoardPage}/>
        <Route path="/dashboard/course" component={DashBoardNotesPage}/>
      </Switch>
    </Router>

    </UserProvider>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
