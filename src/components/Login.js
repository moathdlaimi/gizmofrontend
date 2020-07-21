import React from 'react'
import axios from "axios"
import '../css/Login.css'
import Navigation from '../components/Navigation.js'

class Login extends React.Component {
  state = {
    username:'',
    password:'',

  }

    createSession = (event) => {
      event.preventDefault();
      axios.post(
          'https://gizmo-backend.herokuapp.com/sessions',
          {
            name:this.state.username,
            password:this.state.password

          }
      ).then(
        (response) => {
          if (response.data === '') {
              alert('Username or password wrong')
          } else {
            alert('Welcome ' + this.state.username)
            this.props.history.push('/profile');
          }
        }
      )

    }


    onChangeUsername = (e) =>{
      this.setState({
        username:e.target.value
      })
    }

    onChangePassword = (e) =>{
      this.setState({
        password:e.target.value
      })
    }

  render () {

    return (
      <div>
      <Navigation />
        <div className="login-div">

        <h1>Login</h1>

          <form onSubmit={this.createSession} className="login-form">
            <input  className="login-input" type="text" onChange={this.onChangeUsername} placeholder="Username" required/><br/>
            <input  className="login-input" type="password" onChange={this.onChangePassword} placeholder="Password" required/><br/>
            <input className="login-submit-btn" type="submit" value="Login"/>

          </form>
      </div>
      </div>
    )
  }
}

export default Login
