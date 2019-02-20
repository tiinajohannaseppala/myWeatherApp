import React, { Component } from 'react'

class AddFavorite extends Component {
  state = {
    city: "",
    error: ""

  }
  handleChange = (e) => {
    this.setState({
      [ e.target.id ]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFavorite( this.state );
    this.setState({
      city: ""
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="city"></label>
          <input type="text" id="city" onChange={ this.handleChange } placeholder="Enter new favorite" value={ this.state.city } required />
          <button >Add new</button>
        </form>
      </div>
    )
  }
}

export default AddFavorite