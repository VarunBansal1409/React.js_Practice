import React, { memo } from 'react'

const Users = ({data}) => {
    // console.log(data);
    // data()
    console.log("i am a child component");
    
  return (
    <div>Users</div>
  )
}

export default memo(Users)