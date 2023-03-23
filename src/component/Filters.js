import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Form, Button } from "react-bootstrap";

const Filters = () => {
  return (
    <div className="filter-design ">
      <h2>Get cast in your next role today.</h2>
      <div className="d-flex-jc">
        <Col className="my-3" md={9} xs={11}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filters</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <div className="d-flex-wrap ">
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Gender</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Gender ...</option>
                        <option value="1">20-25</option>
                        <option value="2">25-30</option>
                        <option value="3">30-40</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Compensation</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Compensation ...</option>
                        <option value="1">Compensation1</option>
                        <option value="2">Compensation</option>
                        <option value="3">Compensation</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Age:0-100</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Compensation ...</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Skills</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Skills ...</option>
                        <option value="1">Comedy</option>
                        <option value="2">Action</option>
                        <option value="3">Dance</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Location</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Location ...</option>
                        <option value="1">Chennai</option>
                        <option value="2">Trichy</option>
                        <option value="3">Madurai</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Union State</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Union name ...</option>
                        <option value="1">Chennai</option>
                        <option value="2">Trichy</option>
                        <option value="3">Madurai</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">
                        Role Type <span className="text-danger">*</span>
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Role Type ...</option>
                        <option value="1">Hero</option>
                        <option value="2">Herione</option>
                        <option value="3">Comedian</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">
                        Production Type <span className="text-danger">*</span>
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Production Type ...</option>
                        <option value="1">Hero</option>
                        <option value="2">Herione</option>
                        <option value="3">Comedian</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Ethnicity Type</label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Ethnicity Type ...</option>
                        <option value="1">Chinese</option>
                        <option value="2">Hispanics </option>
                        <option value="3">Asian</option>
                      </Form.Select>
                    </Col>
                    <Col md="6" xs={12} className="px-3 my-2">
                      <label htmlFor="">Keywords</label>
                      <input
                        className="form-control"
                        placeholder="Keywords "
                        type="text"
                      />
                    </Col>
                    <Col className="view-des mt-4 px-3 text-end" xs={12}>
                      <Button type="Submit" className="play-btns ">
                        Save Filter
                      </Button>
                    </Col>
                  </div>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </div>
    </div>
  );
};
export default Filters;
