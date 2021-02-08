import React from "react";

const GithubRepo = ({name, stars, url}) => {

    return (
       <div>
         <div className="card">
                <div className="upper-container">
                 <div className="image-container">
                     <h4><i>Repository Details</i> </h4>
                 </div>
                </div>
               <div className="lower-container">
                      <a href={url}>{name}</a>
                      <h3>Star rating: {stars} Stars</h3>
               </div>

           )}
         </div>
      </div>
    );
}
export default GithubRepo
