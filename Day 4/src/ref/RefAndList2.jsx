import React, { Fragment, useRef } from 'react'

const RefAndList2 = (props) => {
    let demo = useRef()
    console.log(demo);
    console.log(demo.current);
    
    demo.current.style.backgroundColor = "red"

    console.log(props);
    let {arr} = props
    console.log(arr);
    

  return (
    <div>
        {
            arr.map((value , index) => {
                return(
                    <Fragment key={index}>
                        <li ref={demo}>{value}</li>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default RefAndList2