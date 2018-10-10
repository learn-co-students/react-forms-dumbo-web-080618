// Code ControlledInput Component Here
import React, { Component } from 'react'
export default class ControlledInput extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     value: ''
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  state = {
    value: ''
  }
  handleSubmit = (event) => {
    const value = this.state.value
    debugger
    event.preventDefault()
    console.log(value)
    
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange} 
          name = 'textSubmit'
        />
        <input type="submit"/>
      </form>
    )
  }
}