import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
      <div>
          <ul>
              <li>
                  <Link to={"/"}>홈</Link>
              </li>
              <li>
                  <Link to={"/about"}>소개</Link>
              </li>
              <li>
                  <Link to={"/profiles"}>프로필</Link>
              </li>
              <li>
                  <Link to={"/history"}>History 예제</Link>
              </li>
          </ul>
          <hr/>
          <Route path={"/"} component={Home} exact={true}/>
          <Route path={["/about", "/info"]} component={About}/>
          <Route path={"/profiles"} component={Profiles}/>
          <Route path={"/history"} component={HistorySample}/>
      </div>
  );
}

export default App;
