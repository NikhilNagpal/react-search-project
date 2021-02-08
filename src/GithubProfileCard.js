import React from "react";

const GithubProfileCard = ({name, image}) => {
  return (
    <div>
      <div className="card">
        <div className="upper-container">
          <div className="image-container">
            <img src={image} alt="No img" />
          </div>
        </div>
        <div className="lower-container">
          <div>
            <h2> Name: {name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GithubProfileCard;