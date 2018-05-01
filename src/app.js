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
   name : "Chris",
   age : 29,
   location : "Paris",
   gender : "male"
};



function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
};


var templateTwo = (
  <div>
    <h1>
      {user.name.toUpperCase()}
    </h1>
    {getLocation(user.location)}
    <p>age = {user.age}</p>
{   <p>gender = {user.gender}</p>}
  </div>
  )

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);

