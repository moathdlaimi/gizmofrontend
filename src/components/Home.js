import React from 'react'
import axios from "axios";
import '../css/Home.css'
import githubsymbol from '../css/img/github.png'
import linkedinsymbol from '../css/img/linkedin.png'
import logo from '../css/img/logo.png'
import {Link} from 'react-router-dom'
import Navigation from '../components/Navigation.js'



class Home extends React.Component {
  state = {
    tools:[]
  }

  componentDidMount = () => {
      axios.get('/tools').then(
        (response) => {
          this.setState({
              tools:response.data
          })
        }
      )
    }

  handleSearch = (event) => {
    console.log('Searching');
  }


  render () {

    return (
      <div>

      <Navigation />
      <input type="text" id="mySearch" onKeyUp={this.handleSearch} placeholder="Search for a tool"/>
        <div className="tools-container">
        {this.state.tools.map(
          (tool,index) => {
            return <div className="tool" key={index}>
            <img className="tool-img" src={tool.img} alt="tool-pic"/>
            <div className="tool-info">
            <h2>{tool.title}</h2>
            <h4>Price/Day ${tool.price}</h4>
            <h4>Available Today</h4>
            <Link to={"/Tool/"+tool.id}><button className="details-btn">View Details</button></Link >
            </div>
            </div>
        })}
        </div>
        <div className="footer">
          <p>&copy; 2020 Moath Dlaimi</p>
          <img  className="logo-symbol" src={logo} alt="tool-pic"/>
          <div>
          <a href="https://github.com/moathdlaimi?tab=repositories" target="_blank"><img className="socialmedia-symbols" src={githubsymbol} alt="tool-pic"/> </a>
          <a href="https://www.linkedin.com/in/moathdlaimi/" target="_blank"><img className="socialmedia-symbols" src={linkedinsymbol} alt="tool-pic"/> </a>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
