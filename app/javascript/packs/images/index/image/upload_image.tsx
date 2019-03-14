import * as React from "react";

import uploadRequest from "./functions/upload_request";

const UploadImage = (props: any) => {
  return (
    <div onChange={e => uploadRequest(e, props)}>
      <input type="file" accept="image/png" />
    </div>
  );
};

export default UploadImage;
