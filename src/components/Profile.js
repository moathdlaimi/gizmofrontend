import React from 'react'
import axios from "axios";
import '../css/Profile.css'
import Navigation from '../components/Navigation.js'


class Profile extends React.Component {
  // ==============
  // STATE
  // ==============
  state = {
    showEdit:false,
    showNew:false,
    tools:[]
  }

  componentDidMount = () => {
      axios.get('https://gizmo-backend.herokuapp.com/tools').then(
        (response) => {
          this.setState({
              tools:response.data
          })
        }
      )
  }

  toggleShowEdit = () => {
    this.setState({
        showEdit:!this.state.showEdit
    })
  }

  toggleShowNew = () => {
    this.setState({
        showNew:!this.state.showNew
    })
  }

  logout = () => {
      axios.delete('https://gizmo-backend.herokuapp.com/sessions').then(
        (response) => {
              this.props.history.push('/');
        }
      )
  }

  createTool = (event) => {
    event.preventDefault();
    axios.post(
        'https://gizmo-backend.herokuapp.com/tools',
        {
          title:this.state.newTitle,
          img:this.state.newImg,
          description:this.state.newDes,
          price:this.state.newPrice,
          tags:this.state.newTags,

        }
    ).then(
      (response) => {
        this.setState({
          tools:response.data
        })
      }
    )

  }

  createTitle = (event) => {
    this.setState({
        newTitle:event.target.value
    })
  }

  createImg = (event) => {
    this.setState({
        newImg:event.target.value
    })
  }

  createDes = (event) => {
    this.setState({
        newDes:event.target.value
    })
  }

  createPrice = (event) => {
    this.setState({
        newPrice:event.target.value
    })
  }

  createTags = (event) => {
    this.setState({
        newTags:event.target.value
    })
  }

  deleteTool = (event) => {
    axios.delete('https://gizmo-backend.herokuapp.com/tools/' + event.target.value).then(
      (response) => {
        this.setState({
            tools:response.data
        })
      }
    )
}

updateTool = (event) => {
  event.preventDefault()
  const id = event.target.getAttribute('id')
  axios.put(
    'https://gizmo-backend.herokuapp.com/tools/' + id,
    {
      title:this.state.updatedTitle,
      img:this.state.updatedImg,
      description:this.state.updatedDescription,
      price:this.state.updatedPrice,
      tags:this.state.updatedTag


    }
  ).then(
      (response) => {
          this.setState({
              tools:response.data
          })
      }
  )
}

updateTitle = (event) => {
  this.setState({
    updatedTitle:event.target.value,

  })
}
updateImg = (event) => {
  this.setState({
    updatedImg:event.target.value,

  })
}
updateDescription = (event) => {
  this.setState({
    updatedDescription:event.target.value,

  })
}
updatePrice = (event) => {
  this.setState({
    updatedPrice:event.target.value,

  })
}
updateTag = (event) => {
  this.setState({
    updatedTag:event.target.value,

  })
}


    render () {

      return (
        <div className="profile-page">
        <Navigation />
        <div className="profile-btns-div">
        <h2>Your Tools</h2>
        <button className="add-logout-btns" onClick={this.toggleShowNew}>Add new Tool</button>
        <button className="add-logout-btns" onClick={this.logout}>Log Out</button>
        </div>
        { this.state.showNew ?
        <div className="create-form-div">
          <form className="create-form" onSubmit={this.createTool}>
            <input className="create-input" onKeyUp={this.createTitle} type="text" placeholder="Title" required/><br/>
            <input className="create-input" onKeyUp={this.createImg} type="text" placeholder="ImageURL" required/><br/>
            <input className="create-input"onKeyUp={this.createDes} type="text" placeholder="Description" required/><br/>
            <input className="create-input" onKeyUp={this.createPrice} type="text" placeholder="Price" required/><br/>
            <input className="create-input" onKeyUp={this.createTags} type="text" placeholder="Tags" required/><br/>
            <input className="create-submit" type="submit" value="Post New Tool"/>
          </form>
        </div> : null}
        <div className="user-tool-list">
        {
          this.state.tools.map(
          (tool,index) => {
            return (
              <div className="profile-tool">
              <img className="profile-tool-img" src={tool.img} key={index} alt="tool-pic"/>
              <h1>{tool.title}</h1>
              <button className="profile-tools-btns" onClick={this.toggleShowEdit}>Edit Tool</button>
              <button className="profile-tools-btns" value={tool.id} onClick={this.deleteTool}>Delete Tool</button>
              { this.state.showEdit ?
              <div>
                <form id={tool.id} onSubmit={this.updateTool}>
                  <input onKeyUp={this.updateTitle} type="text" placeholder="Title" required/><br/>
                  <input onKeyUp={this.updateImg} type="text" placeholder="ImageURL" required/><br/>
                  <input onKeyUp={this.updateDescription} type="text" placeholder="Description" required/><br/>
                  <input onKeyUp={this.updatePrice} type="text" placeholder="Price" required/><br/>
                  <input onKeyUp={this.updateTag} type="text" placeholder="Tags" required/><br/>
                  <input type="submit" value="Update Tool"/>
                </form>
              </div>: null }
              </div>
            )

        })
      }


        </div>
        </div>
      )
    }
  }

export default Profile
