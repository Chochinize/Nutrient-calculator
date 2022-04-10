import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import ContextApi from "./context/ContextApi";
import NavBar from "./components/NavBar";
import SideBar from  './components/SideBar'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextApi>
        <NavBar/>
        
        <Routes>
          <Route path="/*" element={<App/>}/>
          
        </Routes>
      </ContextApi>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
