import React from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import { NewB, NewD } from "../assets/img";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
const AuditDesign = () => {

    return (
        <div className="aud-design my-4 w-95">
            <div className="d-flex-wrap ">
                <Col lg={4} md={6} xs={12} className="my-2 px-3">
                    <Link to="/auditions/auditionsview ">
                        <div className="auditions-session">
                            <div className="auditions-img">
                                <Image src={NewD} />
                            </div>
                            <div className="auditions-design">
                                <div className="auditions-dates d-flex-al-jb  my-2">
                                    <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                    <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                </div>
                                <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                <p>
                                    Lorem ipsum, in graphical and textual context, refers to
                                    filler text that is placed in a document or visual
                                    presentation. Lorem ipsum is derived from the Latin "dolorem
                                    ipsum" roughly translated as "pain itself.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} md={6} xs={12} className="my-2 px-3">
                    <Link to="/auditions/auditionsview ">
                        <div className="auditions-session">
                            <div className="auditions-img">
                                <Image src={NewB} />
                            </div>
                            <div className="auditions-design">
                                <div className="auditions-dates d-flex-al-jb  my-2">
                                    <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                    <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                </div>
                                <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                <p>
                                    Lorem ipsum, in graphical and textual context, refers to
                                    filler text that is placed in a document or visual
                                    presentation. Lorem ipsum is derived from the Latin "dolorem
                                    ipsum" roughly translated as "pain itself.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} md={6} xs={12} className="my-2 px-3">
                    <Link to="/auditions/auditionsview ">
                        <div className="auditions-session">
                            <div className="auditions-img">
                                <Image src={NewD} />
                            </div>
                            <div className="auditions-design">
                                <div className="auditions-dates d-flex-al-jb  my-2">
                                    <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                    <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                </div>
                                <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                <p>
                                    Lorem ipsum, in graphical and textual context, refers to
                                    filler text that is placed in a document or visual
                                    presentation. Lorem ipsum is derived from the Latin "dolorem
                                    ipsum" roughly translated as "pain itself.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} md={6} xs={12} className="my-2 px-3">
                    <Link to="/auditions/auditionsview ">
                        <div className="auditions-session">
                            <div className="auditions-img">
                                <Image src={NewB} />
                            </div>
                            <div className="auditions-design">
                                <div className="auditions-dates d-flex-al-jb  my-2">
                                    <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                    <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                </div>
                                <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                <p>
                                    Lorem ipsum, in graphical and textual context, refers to
                                    filler text that is placed in a document or visual
                                    presentation. Lorem ipsum is derived from the Latin "dolorem
                                    ipsum" roughly translated as "pain itself.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} md={6} xs={12} className="my-2 px-3">
                    <Link to="/auditions/auditionsview ">
                        <div className="auditions-session">
                            <div className="auditions-img">
                                <Image src={NewD} />
                            </div>
                            <div className="auditions-design">
                                <div className="auditions-dates d-flex-al-jb  my-2">
                                    <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                    <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                </div>
                                <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                <p>
                                    Lorem ipsum, in graphical and textual context, refers to
                                    filler text that is placed in a document or visual
                                    presentation. Lorem ipsum is derived from the Latin "dolorem
                                    ipsum" roughly translated as "pain itself.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} md={6} xs={12} className="my-2 px-3">
                    <Link to="/auditions/auditionsview ">
                        <div className="auditions-session">
                            <div className="auditions-img">
                                <Image src={NewB} />
                            </div>
                            <div className="auditions-design">
                                <div className="auditions-dates d-flex-al-jb  my-2">
                                    <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                    <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                </div>
                                <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                <p>
                                    Lorem ipsum, in graphical and textual context, refers to
                                    filler text that is placed in a document or visual
                                    presentation. Lorem ipsum is derived from the Latin "dolorem
                                    ipsum" roughly translated as "pain itself.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
            </div>
        </div>
    );
};
export default AuditDesign;
