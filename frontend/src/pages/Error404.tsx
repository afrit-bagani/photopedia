import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
      <div className="d-flex flex-column justify-content-center align-items-center gap-4">
        <h1 className="display-1 fw-bold text-light">404 - Page Not Found</h1>
        <p className="flex-1 fw-semibold text-light">
          Oops!!! The Page You are Looking For Does't Exist
        </p>
        <Link to={"/home"}>
          <button className="btn btn-light px-5 py-2">Go To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Error404;
