import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap"
import { MdMovieEdit } from "react-icons/md";
const Floated = () => {
    const [enqModal, setEnqModal] = useState(false)
    return (
        <div className="social_icon">
            <ul>
                <li>
                    <Link className="en_quiry" to="" onClick={() => setEnqModal(true)}>
                        <MdMovieEdit />
                    </Link>
                </li>

            </ul>
            <Modal
                className="flot-monal"
                show={enqModal}
                size="md"
                centered
                onHide={() => setEnqModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton></Modal.Header>
                <div className="audi-form my-3 p-3">
                    <h5>Enquiry Now</h5>
                    <Form >
                        <div className="my-3">

                            <input
                                className="form-control"
                                placeholder="Name "
                                type="name"
                                name="name"
                            />
                        </div>
                        <div className="my-3">

                            <input
                                className="form-control"
                                placeholder="E-mail "
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="my-3">

                            <input
                                className="form-control"
                                placeholder="MOB "
                                type="number"
                                name="mobile"
                            />
                        </div>
                        <div className="my-3">

                            <textarea
                                rows={2}
                                className="form-control"
                                placeholder="type herer..."
                            ></textarea>
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
export default Floated;