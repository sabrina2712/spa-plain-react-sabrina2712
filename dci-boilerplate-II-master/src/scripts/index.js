// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

let mainContentElements = [];

let headlines = React.createElement("h1", {}, "My Awesome Contact List");
mainContentElements.push(headlines);

let createContactSection = (name, phone, email) => {
  let phoneNum = React.createElement("p", {}, phone);
  let contactList = React.createElement("li", {}, name);
  let emailList = React.createElement("p", {}, email);
  let breakLine = React.createElement("br", {});
  let mainList = React.createElement("section", {}, [
    contactList,
    phoneNum,
    emailList,
    breakLine
  ]);
  return mainList;
};

for (let index = 0; index < 3; index++) {
  let fullName = faker.name.findName();
  let phoneNumber = faker.phone.phoneNumber();
  let email = faker.internet.email();

  let section = createContactSection(fullName, phoneNumber, email);
  mainContentElements.push(section);
}

let mainContent = React.createElement("div", {}, mainContentElements);

ReactDOM.render(mainContent, document.getElementById("root"));
