import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        {/* <Child name="Ramu" id = {1} arr = {[10, 20, 30]}/> */}
        <Child name="Ramu" id = {1} arr = {[10, 20, 30]}></Child>
      </div>
    )
  }
}
