import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="p-3 d-flex justify-content-between align-items-center shadow">
        <div>
          <h4 className="m-0 fw-bold ">APP LOGO</h4>
        </div>
        <div className="d-flex gap-3">
          <Link className="text-black text-decoration-none" to="/">
            <h5 className="m-0">DASHBOARD</h5>
          </Link>
          <Link
            className="text-black text-decoration-none"
            to="/create-ad-select"
          >
            <h5 className="m-0">CREATE ADS</h5>
          </Link>
        </div>
      </header>
    </>
  );
}
