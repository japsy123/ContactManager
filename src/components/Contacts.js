import React, { Component } from "react";

class Contacts extends Component {
  state = {
    contacts: [
      { id: 1, name: "Jal", email: "jal@gmail.com", phone: 555 - 555 - 555 },
      { id: 2, name: "Avadhya", email: "avj@gmail.com", phone: 1111111 },
      { id: 3, name: "Avj", email: "avj@gmail.com", phone: 1111111 }
    ]
  };
  render() {
    return <div />;
  }
}

export default Contacts;
