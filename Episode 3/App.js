import React from "react";
import  ReactDOM  from "react-dom/client";

// create react element using JSX
const jsxElement = <h1 id="heading">Hello using JSX.</h1>;

// to write a multiline JSX code need to wrap into ()

const elem =( <h3>My name is Mukund Tiwari
                <h4> Hii this is multiline code using JSX</h4> </h3>);

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(elem);

const Elem2 = ()=> {
return (<div className="container">
    <h3>this is Functional Component embeded into another functional component</h3>
    </div>);
}

// Component Composition => embeding another component in a component

const HeadingComponent = ()=>{
    return (
        <div className="container">
        {elem}
    {
        console.log(`You can write JS Code here ${7*8}`) 
    }
    <h1>this is Functional Component , multiplication done using js => {6*2}</h1>
    <Elem2/>
    </div>
    );
}


root.render(<HeadingComponent/>);