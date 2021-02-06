import React from "react";

class GithubRepo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="card">
           {this.props.searchResult.map((repo) => {
             return (
               <div className="card-text">
                      <a href={repo.html_url}>{repo.name}</a>
                      <span>{repo.stargazers_count} Stars</span>
               </div>
             )
           })}
      </div>
    );
  }
}
export default GithubRepo
