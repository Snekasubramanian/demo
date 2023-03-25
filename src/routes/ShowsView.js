import React from "react";
import { Image } from "react-bootstrap";


const ShowsView = () => {
    return (
        <div className="live-shows">
            <div className="vid-play">
                <iframe src="https://www.youtube.com/embed/SqwQFiaFMOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="my-3 w-95">

            </div>
        </div>
    );
};
export default ShowsView;