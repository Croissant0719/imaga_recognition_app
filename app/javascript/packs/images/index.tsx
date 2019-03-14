import * as React from "react";
import * as ReactDOM from "react-dom";

import { useState } from "react";

import BaseImage from "./src/minion_ca.png";

import Image from "./index/image";
import UploadImage from "./index/image/upload_image";

const Index = () => {
  const [image, setImage] = useState<string>(BaseImage);

  const imageData = {
    image: image,
  }

  const uploadImageData = {
    image: image,
    setImage: setImage
  }

  return (
    <div>
      <Image {...imageData} />
      <UploadImage {...uploadImageData} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("image"));
