import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Header branding="Contact Manager1" />
        <Contact name="Jal" email="jal@gmail.com" phone="111-111-111" />
        <Contact name="Jal" email="jal@gmail.com" phone="111-111-111" />
      </div>
    </div>
  );
}

export default App;
