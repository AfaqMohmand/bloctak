import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
