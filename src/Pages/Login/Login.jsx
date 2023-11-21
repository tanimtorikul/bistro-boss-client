import loginImg from "../../assets/others/authentication1.png";
import loginBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${loginBg})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col md:flex-row-reverse py-12 shadow-2xl	">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="Login Image" className="mb-6" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type the above captcha"
                  className="input input-bordered"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn bg-[#D1A054B2] text-white"
                  type="submit"
                  value="Sign in"
                />
              </div>
            </form>
            <p>
              <small>
                New Here? <Link to="/signup">Create an account</Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
