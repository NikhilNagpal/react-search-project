import React, { useState, useCallback, Fragment} from "react";
import _ from "lodash";
import GithubProfileCard from "./GithubProfileCard";
import GithubRepo from "./GithubRepo";
import Axios from "axios";
import { clientId, clientSecret, icon } from "./GithubCredentials";

const HomePage = () => {
  const [state, setState] = useState({
    queryString: "",
    UserRepoOptions: "users",
  }),
  [searchResult, setSearchResult] = useState<any[]>([]);


  // User and Repository Dropdown handling
  const handleUserRepoOptions = (e: { target: HTMLSelectElement }) => {
    const updatedState = {...state, UserRepoOptions: e.target.value};
    setState(updatedState);
    searchUser(updatedState);
  };

   const inputHandler = (e: { target: HTMLInputElement }) => {
    const updatedState = {...state, queryString: e.target.value};
    setState(updatedState);
    searchUser(updatedState);
  };

  const searchUser = useCallback(
    _.debounce(({UserRepoOptions, queryString}) => {
      console.log(queryString)
      if (queryString && queryString.length >= 3) {
        Axios.get(
          `https://api.github.com/search/${UserRepoOptions}?q=${queryString}&clientId=${clientId}&clientSecret=${clientSecret}`,
          { headers: { Accept: "application/vnd.github.v3.text-match+json" } }
        )
          .then(response => {
          if(response.data.items) {
           setSearchResult(response.data.items);
          }
          })
          .catch(err => {
            console.error(err);
          });
      }
    }, 1000),
    []
  );

  const { queryString, UserRepoOptions } = state;
  return (
    <Fragment>
      <div className="container">
        <div className={queryString ?"App": "middle"}>
          <div>
            <img
              src={icon} alt="No Img present"
            />
            <h2>GitHub Searcher </h2>
            <span>Search users or repositories below</span>
          </div>
          <div className="card-body">
            <div className="search-bar">
              <input
                className="search-bar"
                type="text"
                value={queryString}
                onChange={inputHandler}
                placeholder="Start typing to search .."
              />
              <select value={UserRepoOptions} onChange={handleUserRepoOptions}>
                <option value="users">Users</option>
                <option value="repositories">Repository</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      { queryString && (
        <div>
          {UserRepoOptions === "users" ? (
            <div className="card-grid">
             {searchResult.map(user => (
                <GithubProfileCard key={user.id} name={user.login} image={user.avatar_url} />
                   )
                  )}
            </div>
          ) : (
             <div className="card-grid">
               {searchResult.map(repo => (
               <GithubRepo key={repo.id} name={repo.name} stars={repo.stargazers_count} url={repo.html_url} />
                   )
                )}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};
export default HomePage;