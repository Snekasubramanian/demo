import React from "react";
import { Link } from "react-router-dom";
const BanneDetails = () => {
  return (
    <div className="banner-contet">
      <h1>Ship Of Moon</h1>
      <p>
        Lorem ipsum, in graphical and textual context, refers to filler text
        that is placed in a document or visual presentation
      </p>

      <div className="view-des mt-4">
        <Link to="/entertainment/movieplay" className="play-btn ">
          <lord-icon
            src="https://cdn.lordicon.com/dpohzien.json"
            trigger="hover"
            colors="primary:#121331"
            state="hover"
          ></lord-icon>
          Play Now
        </Link>
      </div>
    </div>
  );
};
export default BanneDetails;
