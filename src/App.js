import React,{useEffect, useState} from "react";
import "./App.css";
import GithubApi from "./GithubApi";

const App = () => {

 /* const [state, setState] = useState({
  results: []
  });

  const onSearch = async (text) => {
  const results = await UserSource.get("/" , {
  params: {q: text}
  })
  setState(prevState => {
  return {...prevState, results:results}
  })
 }*/

 return(
  <div className="App">
    <GithubApi />
  </div>
 );
}
export default App;
