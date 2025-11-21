import React, { Component } from 'react'

class DefaultProps2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} {this.props.id} {this.props.designation}</h1>
      </div>
    )
  }
}

DefaultProps2.defaultProps = {
    name : "Ravi" ,
    id : 7 , 
    designation : "UnEmployed"
}

export default DefaultProps2