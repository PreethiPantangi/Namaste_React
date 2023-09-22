import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement -> Object -> HTMLElement after rendering 
// This syntax is not readable.
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

console.log(heading);

// JSX -> React.createElement -> React.createElement - JS Object -> HTMLElement after rendering 
const jsxHeading = (<h1>
    This is JSX heading!
</h1>);

console.log(jsxHeading);

// React Component
// React Functional Component

const TitleComponent = function() {
    return <h1>This is a title functional component!</h1>
}

// Component Composition
// using arrow functions is a good way to do it.
const HeadingComponent = () => {
    return (
        <div>
            {jsxHeading}
            <TitleComponent/>
            <h1>This is a heading Functional component!</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponent/>);
