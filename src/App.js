// =============================
// DEPENDENCIES
// =============================
import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, withRouter, Switch} from "react-router-dom";
import './App.css'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Login from './components/Login'
import Signup from './components/Signup.js'
import Navigation from './components/Navigation.js'
import Tool from './components/Tool.js'
import logo from './css/img/logo.png'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {


    render(){
        return (

            <div className="container">
            <img src={logo} />
            <Router>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/tool/:id" component={Tool}/>
              </Switch>
            </Router>



            </div>

        )
    }
}
export default App;
