import React from 'react'
import DefaultProps2 from './DefaultProps2'

const DefaultProps1 = () => {
  return (
    <div>
        <DefaultProps2 name = "Sanjay" id = {1} designation = "Developer"/>
        <DefaultProps2 id = {2} designation = "Tester"/>
        <DefaultProps2 name = "Sameeksha" />
        <DefaultProps2 />
    </div>
  )
}

export default DefaultProps1