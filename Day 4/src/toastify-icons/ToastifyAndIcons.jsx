// import React from 'react'
// import { FaCheck } from "react-icons/fa6";
// import { ToastContainer, toast } from 'react-toastify';

// const ToastifyAndIcons = () => {

//     let fun = () => {
//         toast("This is direct i.e., without modifications")
//     }

//   return (
//     <div>
//         <button style={{fontSize : "50px" , borderRadius : "50px"}} onClick={fun}>
//             Notify <FaCheck/>
//         </button>
//         <ToastContainer />
//     </div>
//   )
// }

// export default ToastifyAndIcons

// import React from "react";
// import { FaCheck } from "react-icons/fa6";
// import { ToastContainer, toast, Zoom } from "react-toastify";

// const ToastifyAndIcons = () => {
//   let fun = () => {
//     toast(`This is done through modifications`, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       transition: Zoom,
//     });
//   };

//   return (
//     <div>
//       <button style={{ fontSize: "50px", borderRadius: "50px" }} onClick={fun}>
//         Notify <FaCheck />
//       </button>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Zoom}
//       />
//     </div>
//   );
// };

// export default ToastifyAndIcons;

import React from "react";
import { ToastContainer, toast , Zoom} from "react-toastify";

const ToastifyAndIcons = () => {
  let abc = () => {
    toast("Hello India dfjjkvbkwbf", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  };

  return (
    <div>
      <button onClick={abc}>Notify</button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
};

export default ToastifyAndIcons;
