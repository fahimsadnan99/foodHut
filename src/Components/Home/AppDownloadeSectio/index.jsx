import React from "react";
import Left from "./Left";
import Right from "./Right";

const index = () => {
  return (
    <div className="appDownloadWrapper">
      <div className="xs:w-[95%] md:w-[92%] mx-auto">
        <div className="grid lg:grid-cols-2">
        <Left></Left>
       <Right></Right>
        </div>
      
      </div>
    </div>
  );
};

export default index;
