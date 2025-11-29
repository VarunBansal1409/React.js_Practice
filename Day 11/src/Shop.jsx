import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { cakesold, noofcake } from './redux/cakeAction'

const Shop = () => {

  let quantity = useSelector((state) => state.noofcake)
  let sale = useSelector((state) => state.cakesold)
  let dispatch = useDispatch()

  return (
    <div>
      <h1>Stock of Cake Available : {quantity}</h1>
      <button onClick={() => {dispatch(noofcake())}}>Buy</button>
      <hr />
      <h1>Total Cake Sold : {sale}</h1>
      <button onClick={() => {dispatch(cakesold())}}>Add</button>
    </div>
  )
}

export default Shop
