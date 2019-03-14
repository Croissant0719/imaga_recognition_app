import * as React from "react";

const Image = (props: any) => {
  return (
    <div>
      <p>Please Upload Image!</p>
      <label>
        <img src={props.image} style={{ width: "240px" }} />
      </label>
    </div>
  );
};

export default Image;
