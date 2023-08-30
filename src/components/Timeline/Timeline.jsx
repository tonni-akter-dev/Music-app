import React from "react";
import "./Timeline.css";
const Timeline = () => {
  const userData = JSON.parse(localStorage.getItem("users"));
  console.log(userData);
  const isAuthenticatedForTonni = userData && userData.isAuthenticated == true;
  console.log(isAuthenticatedForTonni);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 timeline_container">
        <div className="timeline_1">
          <h3 className="text_design create_text">Create timeline</h3>
          <button class="btn btn-neutral create_now">Create Now</button>
        </div>
        <div className="timeline_1">
          <h3 className="text_design create_text">Edit timeline</h3>
          <button class="btn btn-neutral create_now">Edit Now</button>
        </div>
      </div>
    </>
  );
};

export default Timeline;
