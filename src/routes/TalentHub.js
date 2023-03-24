import React from "react";
import TopHeading from "../component/TopHeading";
import Filters from "../component/Filters";
import FindTalent from "../component/FindTalent";
const TalentHub = () => {
  return (
    <div className="talenthub-pages">
      <TopHeading type="talenthub" />
      <Filters />
      <FindTalent />
    </div>
  );
};
export default TalentHub;
