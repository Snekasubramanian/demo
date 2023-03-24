import React from "react";
import TopHeading from "../component/TopHeading";
import TalentBanner from "../component/TalentBanner";
import ProfileDetails from "../component/ProfileDetails";
const ProfileView = () => {
    return (
        <div className="talenthub-pages">
            <TopHeading type="talenthub" />
            <TalentBanner />
            <ProfileDetails />
        </div>
    );
};
export default ProfileView;
