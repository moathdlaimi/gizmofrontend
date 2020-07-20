import React from 'react'
import axios from "axios";
import '../App.css'
import {Link} from 'react-router-dom'


class Navigataion extends React.Component {
  state = {
    user:'',
  }

  componentDidMount = () => {
      axios.get('/sessions').then(
        (response) => {
          console.log('current user is ',response.data);
          this.setState({
            user: response.data
          })
        }
      )

  }


  render () {

    return (
      <>
      { this.state.user == null ?
      <nav className="nav-bar">

        <Link to="/" className="nav-links">Home | </Link >
        <Link to="/login" className="nav-links">Login | </Link >
        <Link to="/signup" className="nav-links">Signup</Link >

      </nav>
      : <nav className="nav-bar">

        <Link to="/" className="nav-links">Home | </Link >
        <Link to="/profile" className="nav-links">Profile </Link >

      </nav> }
      </>
    )
  }
}

export default Navigataion
