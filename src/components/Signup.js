import React from 'react'
import axios from "axios";
import '../css/Signup.css'
import Navigation from '../components/Navigation.js'

class Signup extends React.Component {
  state = {
    users:[]
  }

  createUser = (event) => {
    event.preventDefault();
    axios.post(
        'https://gizmo-backend.herokuapp.com/users',
        {
          name:this.state.newName,
          password:this.state.newPassword,
        }
    ).then(
      (response) => {
        this.setState({
          users:response.data
        })
        this.props.history.push('/login');
      }
    )

  }

  createName = (event) => {
    this.setState({
        newName:event.target.value
    })
  }

  createPassword = (event) => {
    this.setState({
        newPassword:event.target.value
    })
  }



  render () {
    return (
      <div>
      <Navigation />
      <div className="signup-div">

        <h1>Signup</h1>
          <form onSubmit={this.createUser} className="signup-form">
            <input className="signup-input" onKeyUp={this.createName} type="text" placeholder="Username" required/><br/>
            <input className="signup-input" onKeyUp={this.createPassword} type="password" placeholder="Password" required/><br/>
            <input className="signup-submit-btn" type="submit" value="Create New User"/>
          </form>
      </div>
      </div>
    )
  }
}

export default Signup
