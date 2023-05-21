import React from "react";
import { Image, Col, Button } from "react-bootstrap";
import { LoginImg, Logo } from "../assets/img";
import { Link, } from "react-router-dom";


const Login = () => {

  return (
    <div className="login-page  ">
      <div className=" login-ses d-flex-al-jc">
        <Col md={5} xs={12}>
          <div className="logi-des">
            <Image src={LoginImg} className="w-90" />
          </div>
        </Col>
        <Col md={5} xs={11} className=" my-3">
          <div className="login-form  ">
            <Link to="/">
              <Image src={Logo} className="" />
            </Link>
            <form className="" >
              <h5>Login with Nanban</h5>
              <div className="my-2">
                <label>Enter your registered Email</label>
                <input
                  type="Email"
                  className="form-control"
                  placeholder="E-mail"
                />

              </div>
              <div className="my-2">
                <label>Enter your registered Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />

              </div>

              <div className="  my-3">
                <button
                  type="submit"
                  className="btn-design "
                //   disabled={pristine || submitting}
                >
                  {" "}
                  Continue{" "}
                </button>
              </div>
              <h6>
                Don't have an account?
                <Link className=" " to="/talentregister">
                  Register
                </Link>
              </h6>
            </form>
          </div>
        </Col>
      </div>
    </div>
  );
};
export default Login;