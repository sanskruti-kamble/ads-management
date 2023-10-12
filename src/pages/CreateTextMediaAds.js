import { useState } from "react";
import SubmitModel from "../components/modals/SubmitModel";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateTextMediaAds() {
  const navigate = useNavigate();
  const params = useParams();

  const [pageType, setPageType] = useState(params.type);
  const [isModalOpen, setIsModelOpen] = useState(false);

  function toggleIsModelOpen() {
    setIsModelOpen(!isModalOpen);
  }

  async function submitHandler(event) {
    event.preventDefault();
    setIsModelOpen(true);

    await setTimeout(() => {
      setIsModelOpen(false);
      navigate("/create-ad-select");
    }, 600);
  }

  return (
    <>
      <section className="p-3 bg-white border rounded">
        <h5 className="fw-semibold text-muted">Create Text & Media</h5>
        <form
          onSubmit={(event) => {
            submitHandler(event);
          }}
        >
          <div className="mt-3 row g-3">
            <div className="col-12 col-md-6">
              <div>
                <label className="form-label" htmlFor="heading-01">
                  Heading 01
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="heading-01"
                  placeholder="Add a heading that would make users interested"
                  value=""
                />
              </div>

              <div className="mt-4">
                <label className="form-label" htmlFor="heading-02">
                  Heading 02
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="heading-02"
                  placeholder="Add a heading that would make users interested"
                  value=""
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                class="form-control"
                id="description"
                placeholder="Add primary text to help users understand more about your products, services or offers"
                rows="5"
                value=""
              />
            </div>
          </div>

          {pageType === "media" && (
            <>
              <div className="mt-1 row g-3">
                <div className="col-12 col-md-4">
                  <label className="form-label" htmlFor="landscape">
                    Landscape Marketing Image (1.9:1)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="landscape"
                    placeholder="Add the URL of the image you want to use for the ad"
                    value=""
                  />
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label" htmlFor="potrait">
                    Portrait Marketing Image (4:5)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="potrait"
                    placeholder="Add the URL of the image you want to use for the ad"
                    value=""
                  />
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label" htmlFor="square">
                    Square Marketing Image (1:1)
                  </label>
                  <input
                    className="form-control"
                    type="url"
                    id="square"
                    placeholder="Add the URL of the image you want to use for the ad"
                    value=""
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="form-label" htmlFor="video-url">
                  Video URL
                </label>
                <input
                  className="form-control"
                  type="url"
                  id="video-url"
                  placeholder="Add the URL of the video you want to us for the ad"
                  value=""
                />
              </div>
            </>
          )}

          <div className="mt-1 row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="business-name">
                Business Name
              </label>
              <input
                className="form-control"
                type="text"
                id="business-name"
                placeholder="Add your Business name"
                value=""
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="button-label">
                Button Label
              </label>
              <select className="form-select" value="">
                <option>Select a label that best suits your ad</option>
              </select>
            </div>
          </div>

          <div className="mt-3">
            <label className="form-label" htmlFor="website-url">
              Website URL
            </label>
            <input
              className="form-control"
              type="url"
              id="website-url"
              placeholder="Add the URL of the landing page you want to redirect useres to"
              value=""
            />
          </div>

          <div className="mt-4 d-flex justify-content-start justify-content-md-end gap-3">
            <button
              className="px-5 btn btn-light fw-semibold"
              type="button"
              onClick={() => navigate("/create-ad-select")}
            >
              Back
            </button>
            <button className="px-5 btn btn-primary fw-semibold" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>

      <SubmitModel open={isModalOpen} handleClose={toggleIsModelOpen} />
    </>
  );
}
