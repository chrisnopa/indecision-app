"use strict";

console.log("App is running fine");

// const app = {
//   name:"Ma nouvelle application",
//   title: "Une app sexy",
//   subtitle: "qui vous sera bien utile",
//   options: ['test1', 'test5']
// };

// const template = (
//   <div>
//     <h1>{app.name}</h1>
//     <h2>{app.title}</h2>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? "Here are your options : ": "No options"}</p>
//   </div>
//   );

var count = 0;
var addOne = function addOne() {
  count++;
  renderAppCounter();
};

var minusOne = function minusOne() {
  count--;
  renderAppCounter();
};

var buttonReset = function buttonReset() {
  count = 0;
  renderAppCounter();
};

var appRoot = document.getElementById("app");
var renderAppCounter = function renderAppCounter() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count :",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+ 1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "- 1"
    ),
    React.createElement(
      "button",
      { onClick: buttonReset },
      "Reset"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderAppCounter();
