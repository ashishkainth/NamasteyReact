/**
 * Using plain javascirpt only
 */
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World";
// console.log("ashish ", heading);

// const root = document.getElementById("root");

// root.append(heading);

/**
 * Using React
 */
const heading = React.createElement("h1", {}, "Hello World!");
const paragraph = React.createElement("p", {}, "I am paragraph!");

const container = React.createElement("div", { id: "container" }, [
  heading,
  paragraph,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
