import React, { useState, useEffect } from "react";

function Alert({ msg }) {
  const [show, setshow] = useState(0);
  console.log("hey me");
  //   useEffect(() => {
  //     // const timer =
  //     setTimeout(() => {
  //       setshow(1);
  //     });
  //     // return () => {
  //     //   clearTimeout(2000);
  //     // };
  //   }, [2000]);

  //   setTimeout(() => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <div className="text-align-center">{msg}</div>
    </div>
  );
}

export default Alert;
