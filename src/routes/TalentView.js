import React from "react";
import TopHeading from "../component/TopHeading";
import Profile from "../component/Profile";
import TalentBanner from "../component/TalentBanner";
const TalentView = () => {
    return (
        <div className="talenthub-pages">
            <TopHeading type="talenthub" />
            <TalentBanner />
            <Profile />
        </div>
    );
};
export default TalentView;
