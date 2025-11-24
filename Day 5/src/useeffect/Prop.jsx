import React, { useEffect } from 'react'

const Prop = ({data}) => {

    useEffect(() => {
        console.log(`I am a Prop Component and whenever the UsEffect component is rendering i am also rendering with it
            This is called as Dependency with value which includes componentWillUnmount()
            This is the value --> ${data}`);
            
            return(() => {
                console.log("Data is Cleaned");
                
                return
            })
    } , [data])

  return (
    <div>Prop of state is {data}</div>
  )
}

export default Prop