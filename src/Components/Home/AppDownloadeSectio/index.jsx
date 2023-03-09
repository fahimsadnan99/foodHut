import React from "react";
import Left from "./Left";
import Right from "./Right";

const index = () => {
  return (
    <div className="appDownloadWrapper">
      <div className="w-[92%] mx-auto">
        <div className="grid md:grid-cols-2">
        <Left></Left>
       <Right></Right>
        </div>
      
      </div>
    </div>
  );
};

export default index;
