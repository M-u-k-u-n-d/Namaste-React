import  React  from "react";
import  ReactDOM  from "react-dom/client";
let content = "Hello world Using React!";
let element = React.createElement("h1", { className: "this object is used to give attributes to the elements" }, content);
let root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(element);

let parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement(
                'h1',
                {},
                "I am h1 tag!"
            ),
            React.createElement(
                'h2',
                {},
                "I am h1 tag!"
            )]
    ),
    React.createElement(
        'div',
        { id: 'child2' },
        [
            React.createElement(
                'h1',
                {},
                "I am h1 tag!"
            ),
            React.createElement(
                'h2',
                {},
                "I am h1 tag!"
            )]
    )
    ]
); 

root.render(parent);