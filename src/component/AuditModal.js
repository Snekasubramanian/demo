import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
const AuditModal = () => {
    const [auditModal, setAuditModal] = useState(false);

    return (
        <div className="modal-de">
            <Button className="btn-design" onClick={() => setAuditModal(true)}>Get to Auditions</Button>
            <Modal
                className="des-monal"
                show={auditModal}
                size="md"
                centered
                onHide={() => setAuditModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton></Modal.Header>
                <div className="from-des my-2 px-3">
                    <h5>Get in Touch</h5>
                    <Form >
                        <div className="my-2">
                            <label htmlFor="">Name</label>
                            <input
                                className="form-control"
                                placeholder="Enter your name "
                                type="name"
                                name="name"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Email ID</label>
                            <input
                                className="form-control"
                                placeholder="Enter your E-mail "
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Mobile Number</label>
                            <input
                                className="form-control"
                                placeholder="Enter your MOB "
                                type="number"
                                name="mobile"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Audition Titile</label>
                            <input
                                className="form-control"
                                placeholder="Enter the Audition Titile "
                                type="text"
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Audition Titile</label>
                            <textarea
                                rows={2}
                                className="form-control"
                                placeholder="Type here ..."
                            ></textarea>
                        </div>
                        <div className="view-des mt-4  ">
                            <Button type="Submit" className="btn-design ">
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </div>

    );
};
export default AuditModal;