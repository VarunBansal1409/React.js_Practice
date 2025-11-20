import React from "react"

let Example = () =>
    {
    return(
        <div>
            {
                React.createElement("h1" , null , "Hello World")
            }
            {
                React.createElement("ol" , {id:"demo"} , React.createElement("li" , null , "item1") , React.createElement("li" , null , "item2") , React.createElement("li" , null , "item3"))
            }

            <h1 style={{textAlign:"center"}}>{10 + 10}</h1>
        </div>
    )
}
// 
export default Example  