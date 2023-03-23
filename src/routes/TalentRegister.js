import React from "react";
import TopHeading from "../component/TopHeading";
import { Col, Form, Button } from "react-bootstrap";
 

const TalentRegister = () => {
  return (
    <div className="talent-regis">
      <TopHeading type="talentregister" />
      <h2>Join Backstage today, land a job tomorrow. </h2>
      <div className="d-flex-jc">
        <Col className="from-des my-3" lg={9} xs={11}>
          <h3>Register now</h3>
          <Form>
            <div className="d-flex-wrap my-2">
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Name</label>
                <input
                  className="form-control"
                  placeholder="Enter your name "
                  type="name"
                  name="name"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Mobile Number</label>
                <input
                  className="form-control"
                  placeholder="Enter your MOB "
                  type="number"
                  name="mobile"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Email ID</label>
                <input
                  className="form-control"
                  placeholder="Enter your E-mail "
                  type="email"
                  name="email"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Password</label>
                <input
                  className="form-control"
                  placeholder="Enter your password "
                  type="name"
                  name="name"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Country</label>
                <input
                  className="form-control"
                  placeholder="Enter your country "
                  type="country"
                  name="country"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">City</label>
                <input
                  className="form-control"
                  placeholder="Enter your city "
                  type="city"
                  name="city"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Gender</label>
                <input
                  className="form-control"
                  placeholder="Enter your gender "
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Age</label>
                <input
                  className="form-control"
                  placeholder="Enter your age "
                  type="text"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Height</label>
                <input
                  className="form-control"
                  placeholder="How tall your are?"
                  type="text"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Chest/Bust</label>
                <input
                  className="form-control"
                  placeholder="Enter your chest/bust inch "
                  type="text"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Waist</label>
                <input
                  className="form-control"
                  placeholder="Enter your waist inch"
                  type="text"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Youtube Link</label>
                <input
                  className="form-control"
                  placeholder="Enter your youtube Link "
                  type="Link"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Facebook Link</label>
                <input
                  className="form-control"
                  placeholder="Enter your facebook link "
                  type="Link"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Instagram Link</label>
                <input
                  className="form-control"
                  placeholder="Enter your instagram Link "
                  type="Link"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Any others Link</label>
                <input
                  className="form-control"
                  placeholder="Enter your any other's Link "
                  type="Link"
                />
              </Col>
              <Col md="6" xs={12} className="px-3 my-2">
                <label htmlFor="">Instagram Link</label>
                <textarea
                  rows={2}
                  className="form-control"
                  placeholder="Type here ..."
                ></textarea>
              </Col>
              <Col xs={12} className="px-3 my-2">
                <label htmlFor="">Upload Image or PDF</label>
                <input
                  className="form-control"
                  placeholder="Enter your any other's Link "
                  type="file"
                />
              </Col>
              <div className="view-des mt-4 px-3">
                <Button type="Submit" className="play-btns ">
                  Register
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </div>
    </div>
  );
};
export default TalentRegister;
