import React from 'react'
import axios from "axios";
import '../css/Tool.css'
import Navigation from '../components/Navigation.js'

class Tool extends React.Component {
  state = {
    modalOff:true
  }
  componentDidMount = () => {
        let id = this.props.match.params.id;
        axios.get('https://gizmo-backend.herokuapp.com/tools/'+id).then(
            response => {
                this.setState({
                  id:response.data.id,
                  title:response.data.title,
                  img:response.data.img,
                  description:response.data.description,
                  price:response.data.price,
                  tags:response.data.tags,
                  rentee:response.data.rentee
                });
            }
        )
    }

    rent = () => {
      this.setState({
        modalOff:!this.state.modalOff
      })
    }

  render () {
    return (
      <div className="show-main-container">
        <Navigation />
        {
          this.state.modalOff ?
        <div className="show-container">
        <div>
        <img className="show-tool-img" src={this.state.img}/>
        </div>
        <div>
        <h1>{this.state.title}</h1>
        <h3>Posted by: {this.state.rentee}</h3>
        <hr/>
        <h3>Price per day: ${this.state.price}</h3>
        <h3>Available Today for pickup in San Francisco</h3>
        <form className="rent-date-form">
          <label id="rent-label">
            Select a Date : <input id="rent-date-input" type="date" name="rent-date"/>
            </label>
          </form>
        <button onClick={this.rent} id="rent-btn">Rent Now</button>

        <p>Notes from the Owner <br/>
        <li>{this.state.description}</li></p>
        </div>
        </div>
        : <div class="modal">Under Construction<br/> <input type="button" id="post-rent-btn" onClick={this.rent} value="GOT IT"/></div>
      }
      </div>
    )
  }
}

export default Tool
