import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Header branding="Contact Manager1" />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
