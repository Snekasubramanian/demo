import React from "react";
import { Image } from "react-bootstrap";
import { NewD } from "../assets/img";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ResentAudition from "../component/ResentAudition";
import AuditModal from "../component/AuditModal";
const AuditionsView = () => {
    return (
        <div className="news-page w-95">
            <Image src={NewD} className="w-100" />
            <div className="aud-design my-4 ">
                <div className="auditions-design">
                    <h5>The Best Live Streaming Equipment For Every Budget</h5>
                    <div className="auditions-dates d-flex-wrap my-3">
                        <h6 className="px-2"> <HiOutlineLocationMarker /> Chennai</h6>
                        <h6 className="px-2">  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                    </div>
                    <p>
                        Lorem ipsum, in graphical and textual context, refers to
                        filler text that is placed in a document or visual
                        presentation. Lorem ipsum is derived from the Latin "dolorem
                        ipsum" roughly translated as "pain itself.
                    </p>
                    <p>
                        Lorem ipsum, in graphical and textual context, refers to
                        filler text that is placed in a document or visual
                        presentation. Lorem ipsum is derived from the Latin "dolorem
                        ipsum" roughly translated as "pain itself.
                    </p>
                    <p>
                        Lorem ipsum, in graphical and textual context, refers to
                        filler text that is placed in a document or visual
                        presentation. Lorem ipsum is derived from the Latin "dolorem
                        ipsum" roughly translated as "pain itself.
                    </p>
                    <p>
                        Lorem ipsum, in graphical and textual context, refers to
                        filler text that is placed in a document or visual
                        presentation. Lorem ipsum is derived from the Latin "dolorem
                        ipsum" roughly translated as "pain itself.
                    </p>
                    <AuditModal />
                </div>
                <ResentAudition />
            </div>
        </div>
    );
};
export default AuditionsView;
