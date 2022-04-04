import React from "react";

function Avater({ imageUrl, w, h }) {
  return (
    <div
      style={{
        width: w ? w : "50px",
        height: h ? h : "50px",
        borderRadius: "25px",
      }}
    >
      <img
        src={imageUrl}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "25px",
        }}
        alt="avater"
      />
    </div>
  );
}

export default Avater;
