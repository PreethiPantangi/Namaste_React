import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id = 'parent'>
 *  <div id = 'child1'>
 *      <h1>I am a h1 tag</h1>
 *      <h2>I am a h2 tag</h2>
 *  </div>
 * <div id = 'child2'>
 *      <h1>I am a h1 tag</h1>
 *      <h2>I am a h2 tag</h2>
 *  </div>
 * </div>
 */

const childHeading1 = React.createElement("h1", {}, "I am a h1 tag");
const childHeading2 = React.createElement("h2", {}, "I am a h2 tag");
const child1 = React.createElement("div", {id: "child1"}, [childHeading1, childHeading2]);
const child2 = React.createElement("div", {id: "child2"}, [childHeading1, childHeading2]);
const parent = React.createElement("div", {id: "parent"}, [child1, child2]);

const heading = React.createElement("h1", {id: "heading"}, "Hello from react JS");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

