import React from "./style.scss";

import "./style.scss";

function ImagePreview(props) {
  return (
    <div className={"image-preview-component"}>
      <div className={"section"}>
        <div className={"close"} onClick={() => props.onClose(false)}>
          X
        </div>
        <div className={"uploaded-pic"}>
          <img src={props.picSrc} alt={"Uplaoded Pic"} />
          <p className={"pic-name"}>
            {props.fileData.lastModifiedDate.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
