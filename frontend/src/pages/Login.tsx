import { FaEnvelope, FaLock } from "react-icons/fa";
import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const FRONTEND_URL = "http://localhost:5173";
  function handleSubmit() {
    console.log("Submit");
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className={`${styles.formContainer}`}>
          <div className="text-center mb-4">
            <h1 className="text-info fw-bold">Login</h1>
            <p className="text-muted fw-lighter">
              Welcome Back, Please Login !!!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label fw-bold text-primary"
              >
                Email
              </label>
              <div className="input-group">
                <span>
                  <FaEnvelope className="text-danger fs-4" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label fw-bold text-primary"
              >
                Password
              </label>
              <div className="input-group gap-2">
                <span>
                  <FaLock className="text-danger fs-4" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-danger w-100 fw-bold y-2">
              Submit
            </button>
          </form>
          <p className="text-muted text-center mt-3">Dont't have an Account</p>
        </div>
      </div>
    </>
  );
}

export default Login;
