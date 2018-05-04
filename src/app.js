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

let count = 0;
const addOne = () => {
  count++;
  renderAppCounter();
};

const minusOne = () => {
  count--;
  renderAppCounter();
};

const buttonReset = () => {
  count = 0;
  renderAppCounter();
};


const appRoot = document.getElementById("app");
const renderAppCounter = () => {
  const templateTwo = (
    <div>
      <h1>
        Count :{count}
      </h1>
      <button onClick = {addOne}>+ 1</button>
      <button onClick= {minusOne}>- 1</button>
      <button onClick= {buttonReset}>Reset</button>
    </div>
    );
  ReactDOM.render(templateTwo, appRoot);
};

renderAppCounter();

