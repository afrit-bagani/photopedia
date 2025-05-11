import styles from "../css/Register.module.css";

function Register() {
  function handleRegister() {
    console.log("Regsiter");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`${styles.formContainer}`}>
        <form>
          <div className="text-center">
            <h2 className="fw-bold text-info">Register</h2>
            <p className="text-muted fw-semibold">Create Your Account Here</p>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="form-label text-primary fw-bold">
              Email
            </label>
            <div className="input-group">
              <span></span>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="form-label text-primary fw-bold"
            >
              Password
            </label>
            <div className="input-group">
              <span></span>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <button
            className="btn btn-danger w-100 py-3"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
