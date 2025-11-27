// import React, {useReducer} from 'react'

// let initialValue = 0;

// let reducer = (previousState , action) => {
//     switch(action){

//         case 'incr' :
//             return previousState + 1;

//         case 'decr' :
//             return previousState - 1;

//         case 'reset' :
//             return 0;

//         default :
//             return previousState
//     }
// }

// const UseReducer = () => {

//     let [state , dispatch] = useReducer(reducer , initialValue)

//   return (
//     <div>
//         <h1>State is {state}</h1>
//         <button onClick={() => {dispatch('incr')}}>Incr</button>
//         <button onClick={() => {dispatch('reset')}}>Reset</button>
//         <button onClick={() => {dispatch('decr')}}>Decr</button>
//     </div>
//   )
// }

// export default UseReducer












// import React, { useReducer } from 'react'
// import img1 from '../assets/img1.jpg'
// import img2 from '../assets/img2.jpg'

//     let initialValue = img1

//     let reducer = (previousState , action) => {
//         switch(action)
//         {
//             case 'img' :
//                 return img2;

//             default :
//             return previousState

//         }
//     }

// const Assignment = () => {

//     let [state , dispatch] = useReducer(reducer , initialValue)

//   return (
//     <div>
//         <img src={state} alt=""  height="400px" width="400px"/>
//         <br /><br />
//         <button onClick={() => {dispatch('img')}}>Change</button>
//     </div>
//   )
// }

// export default Assignment











// import React, { useReducer } from "react";

// let initialValue = {
//   name: "Abhi",
//   id: 1,
//   designation: "Tester",
// };

// let reducer = (previousState, action) => {
//   switch (action) {
//     case "obj":
//       return {
//         name: "Raul",
//         id: 2,
//         designation: "Devops",
//       };
//       default:
//         return previousState
//   }
// };

// const UseReducer = () => {
//   let [state, dispatch] = useReducer(reducer, initialValue);

//   return (
//     <div>
//       <h1>My Name is {state.name}</h1>
//       <h1>My ID is {state.id}</h1>
//       <h1>My Post is {state.designation}</h1>
//       <br /><br />
//       <button onClick={() => {dispatch("obj")}}>Change</button>
//     </div>
//   );
// };

// export default UseReducer;











// import React, { useReducer } from "react";

// let initialValue = [10 , 20 , 30 ,40 ,50]

// let reducer = (previousState , action) => {
//     switch(action)
//     {
//         case 'arr' :
//             return [100 ,200 ,300 ,400 , 500]
//     }
// }

// const UseReducer = () => {

//   let [state, dispatch] = useReducer(reducer, initialValue);

//   return (
//     <div>
//         {
//             state.map((value , index) => {
//                 return(
//                     <ul key={index}>
//                         <li>{value}</li>
//                     </ul>
//                 )
//             })
//         }
//         <button onClick={() => {dispatch("arr")}}>Change</button>
//     </div>
//   )
// }

// export default UseReducer










// import React, { useReducer } from 'react'

//     let initialValue = {
//         count : 0,
//     }

//     let reducer = (previousState , action) => {

//         let {count} = previousState

//         switch(action.type)
//         {
//             case 'incr' :
//                 return {count : count + 1,};
            
//             case 'decr' :
//                 return {count : count - 1,};

//             case 'reset' :
//                 return {count : 0,};

//             default :
//                 return previousState
//         }
//     }

// const UseReducer = () => {

//     let [state , dispatch] = useReducer(reducer , initialValue)

//   return (
//     <div>
//         <h1>State is {state.count}</h1>
//         <button onClick={() => {dispatch({type : "incr"})}}>Incr</button>
//         <button onClick={() => {dispatch({type : "reset"})}}>Reset</button>
//         <button onClick={() => {dispatch({type : "decr"})}}>Decr</button>
//         </div>
//   )
// }

// export default UseReducer









import React, { act, useReducer } from 'react'

    let initialValue = {
        count : 0,
    }

    let reducer = (previousState , action) => {

        let {count} = previousState

        switch(action.type)
        {
            case 'incr' :
                return {count : count + action.value};
            
            case 'decr' :
                return {count : count - action.value};

            case 'reset' :
                return {count : 0};

            default :
                return previousState
        }
    }

const UseReducer = () => {

    let [state , dispatch] = useReducer(reducer , initialValue)

  return (
    <div>
        <h1>State is {state.count}</h1>
        <button onClick={() => {dispatch({type : "incr" , value : 1})}}>Incr</button>
        <button onClick={() => {dispatch({type : "incr" , value : 10})}}>Incr by 10</button>
        <button onClick={() => {dispatch({type : "reset"})}}>Reset</button>
        <button onClick={() => {dispatch({type : "decr" , value : 1})}}>Decr</button>
        <button onClick={() => {dispatch({type : "decr" , value : 10})}}>Decr by 10</button>
        </div>
  )
}

export default UseReducer