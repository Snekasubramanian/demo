import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
const JobModal = () => {
    const [jobModal, setJobModal] = useState(false)

    return (
        <div className="modal-de">
            <Button className="btn-design my-3" onClick={() => setJobModal(true)}>Apply Now</Button>
            <Modal
                className="dest-monal"
                show={jobModal}
                size="md"
                centered
                onHide={() => setJobModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton></Modal.Header>
                <div className="audi-form my-2 p-3">
                    <h5>Get in Touch</h5>
                    <Form >
                        <div className="my-2">
                            <label htmlFor="">Name</label>
                            <input
                                className="form-control"
                                placeholder="Name "
                                type="name"
                                name="name"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Email ID</label>
                            <input
                                className="form-control"
                                placeholder="E-mail "
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Mobile Number</label>
                            <input
                                className="form-control"
                                placeholder="MOB "
                                type="number"
                                name="mobile"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Qualification</label>
                            <input
                                className="form-control"
                                placeholder="Qualification "
                                type="text"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Experience</label>
                            <input
                                className="form-control"
                                placeholder="YOE"
                                type="text"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Expected Salary</label>
                            <input
                                className="form-control"
                                placeholder="Expected Salary"
                                type="text"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Address</label>
                            <textarea
                                rows={2}
                                className="form-control"
                                placeholder="Current Address"
                            ></textarea>
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Upload Resume</label>
                            <input
                                className="form-control"
                                placeholder="Expected Salary"
                                type="file"
                            />
                        </div>
                        <div className="view-des mt-4  ">
                            <Button type="Submit" className="btn-design ">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </div>

    );
};
export default JobModal;