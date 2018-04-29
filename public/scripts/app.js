console.log("App is running fine");

var template = React.createElement(
  "p",
  null,
  " Test!"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
