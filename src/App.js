import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager1" />
      <Contact name="Jal" email="jal@gmail.com" phone="111-111-111" />
    </div>
  );
}

export default App;
