console.log("App is running fine");




const app = {
  name:"Ma nouvelle application",
  title: "Une app sexy",
  subtitle: "qui vous sera bien utile",
  options: ['test1', 'test5']
};

const template = (
  <div>
    <h1>{app.name}</h1>
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options : ": "No options"}</p>
  </div>
  );

const user = {
   // name : "Chris",
   age : 19,
   location : "Paris",
   gender : "male"
};



function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
};
}


const templateTwo = (
  <div>
    <h1>
    {user.name ? user.name.toUpperCase() : "Anonyme"}
    </h1>
    {(user.age && user.age >= 18) && <p>Age = {user.age}</p>}
    {getLocation(user.location)}
    <p>gender = {user.gender}</p>
  </div>
  );

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

