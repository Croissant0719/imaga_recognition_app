import * as React from "react";
import * as ReactDOM from "react-dom";

import { useState } from "react";

import BaseImage from "./src/minion_ca.png";

// import Image from "./index/image";
// import UploadImage from "./index/image/upload_image";

// const data = {
//   image: BaseImage,
// }

const Index = () => {
  const imagePath = "upload_image";

  const [image, setImage] = useState<string>(BaseImage);

  const uploadRequest = (element: any) => {
    const target = element.target as HTMLInputElement;
    const file = target.files[0] as File;
    const file_path = URL.createObjectURL(file);

    setImage(file_path);
  };

  return (
    <div>
      <label>
        <img src={image} style={{ width: "240px" }} />
      </label>
      <div>
        <input
          onChange={uploadRequest}
          type="file"
          accept="image/png"
        />
      </div>
      {/* <Image {...data} />
      <UploadImage /> */}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("image"));
