import React from "react";
import { Image, Col } from "react-bootstrap";
import { LoginImg, Logo } from "../assets/img";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="login-page  d-flex-wrap">
            <Col md={5} xs={12}>
                <div className="logi-des">
                    <Image src={LoginImg} className="w-90" />
                </div>
            </Col>
            <Col md={7} xs={12} className="px-3 my-2">
                <div class="login-form  ">
                    <Link href="/home">
                        <Image src={Logo} class="" />
                    </Link>
                    <h5>Login with Riofin</h5>
                    <label class="my-2">Enter your registered phone number</label>
                    <input maxlength="10" type="number" class="form-control" placeholder="Mobile Number" />
                    <Link class="login-btn" to="/"> Continue </Link>
                </div>
            </Col>
        </div>
    );
};
export default Login;
