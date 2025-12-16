// nested element

/**
 * <div id="parents">
 *      <div id="child">
 *          <h1> Iam h1 tag</h1>
 *          <h2> iam h2 tag</h2>
 *      </div>
 *       <div id="child2">
 *          <h1> Iam h1 tag</h1>
 *          <h2> iam h2 tag</h2>
 *      </div>
 *
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
  ,
]);

const nested = ReactDOM.createRoot(document.getElementById("nested"));

nested.render(parent);

console.log(parent);

//single block

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world  from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
