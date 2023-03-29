import React from "react";
import { Field, reduxForm } from "redux-form";
import { Image, Col, Form, Button } from "react-bootstrap";
import { LoginImg, Logo } from "../assets/img";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import useToken from "../constants/Storage/useToken";
import { validPassword } from "../constants/Services/constants";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Enter Email id";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Enter Password";
  } else if (validPassword.test(values.password)) {
    errors.password =
      "Minimum eight characters, at least one letter and one number";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  placeholder,
  readOnly,
  meta: { touched, error, warning },
  ...custom
}) => (
  <FormControl
    error={touched && error}
    style={{
      width: "100%",
    }}
  >
    <TextField
      style={{
        width: "100%",
        border: "1px solid #c5c5c5",
        padding: "3px",
      }}
      type={type}
      innerRef={input}
      disabled={readOnly}
      error={touched && error}
      value={input.value}
      placeholder={placeholder}
      {...input}
      {...custom}
      InputProps={{ disableUnderline: true }}
    />
    <FormHelperText>
      {touched && error ? error : touched && error ? error : ""}
    </FormHelperText>
  </FormControl>
);

const Login = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const navigate = useNavigate();

  const { token, setToken } = useToken();

  const submitHandle = (values) => {
    console.log("values", values);
    if (values) {
      setToken(values);
      navigate("/");
    }
  };

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
            <form className="" onSubmit={handleSubmit(submitHandle)}>
              <h5>Login with Nanban</h5>
              <div className="my-2">
                <label>Enter your registered Email</label>
                {/* <input
                  type="Email"
                  className="form-control"
                  placeholder="E-mail"
                /> */}
                <Field
                  name="email"
                  type="text"
                  className="form-control px-2"
                  component={renderField}
                  placeholder="E-mail"
                />
              </div>
              <div className="my-2">
                <label>Enter your registered Password</label>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                /> */}
                <Field
                  name="password"
                  type="password"
                  className="form-control px-2"
                  component={renderField}
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
export default reduxForm({
  form: "login", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(Login);
