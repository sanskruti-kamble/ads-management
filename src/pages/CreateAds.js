import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/mobile1.png";
import image2 from "../assets/images/mobile2.png";
import { useState } from "react";

export default function CreateAds() {
  const navigate = useNavigate();

  const [isTextSelected, setIsTextSelected] = useState(false);
  const [isMediaSelected, setIsMediaSelected] = useState(false);

  function goToCreateAd() {
    const path = `/create-ad/${isMediaSelected ? "media" : "text"}`;

    if (isTextSelected || isMediaSelected) {
      navigate(path);
    }
  }

  return (
    <>
      <div
        className="p-3 d-flex flex-column bg-white border"
        style={{ flex: 1 }}
      >
        <h5 className=" create-add-header fw-semibold text-muted ">
          Create Ads
        </h5>

        <div
          className="mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-4"
          style={{ flex: 1 }}
        >
          <div
            className="ad-create-card rounded-3 shadow position-relative"
            onClick={() => {
              setIsTextSelected(!isTextSelected);
            }}
          >
            <div
              class="form-check position-absolute"
              style={{ top: "1rem", left: "1rem" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={isTextSelected}
              />
            </div>

            <div className="p-5 pb-0 flex-direction-column gap-3">
              <img src={image1} alt="Media Img" />
            </div>
            <div className="p-2 primary-bg-clr m-1 mt-0 d-flex flex-column justify-content-center align-items-center">
              <p className="mb-0 text-secondary text-opacity-25">Create</p>
              <h4 className="fw-bold">Text Ad</h4>
            </div>
          </div>

          <div
            className="ad-create-card rounded-3 shadow position-relative"
            onClick={() => {
              setIsMediaSelected(!isMediaSelected);
            }}
          >
            <div
              class="form-check position-absolute"
              style={{ top: "1rem", left: "1rem" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={isMediaSelected}
              />
            </div>
            <div className="p-5 pb-0 flex-direction-column gap-3">
              <img src={image2} alt="Media Img" />
            </div>
            <div className="p-2 primary-bg-clr m-1 mt-0 d-flex flex-column justify-content-center align-items-center">
              <p className="mb-0 text-secondary text-opacity-25">Create</p>
              <h4 className="fw-bold">Media Ad</h4>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-start justify-content-md-end">
          <button
            className="mt-5 mb-3 ps-5 pe-5 btn btn-primary"
            type="button"
            onClick={() => goToCreateAd()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
