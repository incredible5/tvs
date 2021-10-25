import React, { useState } from "react";
import ImagePreview from "../../Components/ImagePreview";
import LogoutButton from "../../Components/LogoutButton";

import "./style.scss";

function DetailsPage(props) {
  let data = localStorage.getItem("data") || [];

  const [picSrc, setPicSrc] = useState("");
  const [fileData, setFileData] = useState("");
  const [showImagePreview, setShowImagePreview] = useState(false);

  if (data && data.length > 0) {
    if (props.match.params.rowId) {
      data = JSON.parse(data)[props.match.params.rowId];
    }
  }

  const uploadFile = (evt) => {
    let file = evt.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          setFileData(file);
          setPicSrc(this.result);
          setShowImagePreview(true);
        },
        false
      );
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={"details-container"}>
      <div className={"logout"}>
        <LogoutButton />
      </div>
      <div className={"details-block"}>
        <div className={"title"}>Employee Details</div>
        <div className={"details"}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Desgination</th>
                <th>Address</th>
                <th>Pin Code</th>
                <th>Date Of Joining</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {data.map((item, idx) => {
                  return <td key={idx}>{item}</td>;
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        className={"photo-btn"}
        onClick={() => document.getElementById("take-pic").click()}
      >
        Click a photo
      </button>
      <input
        type="file"
        id="take-pic"
        onChange={uploadFile}
        style={{ display: "none" }}
        accept="image/*"
      />
      {showImagePreview && (
        <ImagePreview
          picSrc={picSrc}
          fileData={fileData}
          onClose={setShowImagePreview}
        />
      )}
    </div>
  );
}

export default DetailsPage;
