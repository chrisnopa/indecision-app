"use strict";

console.log("App is running fine");

// var app = {
//   name:"Ma nouvelle application",
//   title: "Une app sexy",
//   subtitle: "qui vous sera bien utile",
//   item: "test"
// };

// var template = (
//   <div>
//     <h1>{app.name}</h1>
//     <h2>{app.title}</h2>
//     <p>{app.subtitle}</p>
//     <ol>
//       <li>
//         {app.item}
//       </li>
//       <li>
//         {app.item}
//       </li>
//     </ol>
//   </div>
//   );

var user = {
  name: "Chris",
  age: 29,
  location: "Paris",
  gender: "male"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location : ",
      location
    );
  }
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name.toUpperCase()
  ),
  getLocation(user.location),
  React.createElement(
    "p",
    null,
    "age = ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "gender = ",
    user.gender
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
