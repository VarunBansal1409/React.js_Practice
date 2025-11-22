import React from "react";
import Login from "./Login";
import Error from "./Error";

const ConditionRendering = (props) => {
  return (
    <div>
      {props.page === true ? <Login /> : <Error />}
      {window.navigator.onLine === true ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <h1>user is OffLine</h1>
      )}
    </div>
  );
};

export default ConditionRendering;
