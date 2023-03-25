import React from "react"; 
import ResentPost from "../component/ResentPost";

const ShowsView = () => {
    return (
        <div className="live-shows">
            <div className="vid-play">
                <iframe src="https://www.youtube.com/embed/SqwQFiaFMOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="my-3 w-95">
                <h3>Ship Of full moon</h3>
                <div className="d-flex mov-des">
                    <ul className="red-tex">
                        <li>.Action</li>
                        <li>.Tamil</li>
                    </ul>
                    <ul>
                        <li>.1 hrs 23mins</li>
                        <li>.2022</li>
                    </ul>
                </div>
                <div className="d-flex mov-des">
                    <ul className="red-tex">
                        <li>Actors :</li>
                    </ul>
                    <ul>
                        <li> Vijay</li>
                    </ul>
                </div>
                <p>
                    Lorem ipsum, in graphical and textual context, refers to filler text
                    that is placed in a document or visual presentation
                    that is placed in a document or visual presentation
                </p>
                <p>
                    Lorem ipsum, in graphical and textual context, refers to filler text
                    that is placed in a document or visual presentation
                </p>
                <p>
                    Lorem ipsum, in graphical and textual context, refers to filler text
                    that is placed in a document or visual presentation
                </p>
                <p>
                    Lorem ipsum, in graphical and textual context, refers to filler text
                    that is placed in a document or visual presentation
                </p>
            </div>
            <ResentPost />
        </div>
    );
};
export default ShowsView;