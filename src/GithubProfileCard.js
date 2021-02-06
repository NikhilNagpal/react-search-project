import React from "react";

class GithubProfileCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
       let {name, avatar_url, location} = this.props.searchResult;
       return (
  <div className="card-grid">
    <div className="card">
      <div className="upper-container">
        <div className="image-container">
          <img src={avatar_url} alt="No img" />
        </div>
      </div>
     <div className="lower-container">
        <div>
         <h2> Name: {name}</h2>
         <h2>Location: {location}</h2>
        </div>
     </div>
    </div>
  </div>
       );
    }
}
export default GithubProfileCard;