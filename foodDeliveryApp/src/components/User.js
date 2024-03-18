import { useState } from "react";

const User = (props)=>{
    const [value] = useState(0);
    const [value2] = useState(-1);
    return (
        <div className="user-container">
        <h2>Hii, This is {props.name} </h2>
        <h3>A {props.role}</h3>
        <p>Creating a Food Delivery App using React <b> Functional </b>components</p>
        <p>Value using Functional state variable = <b>{value} , {value2}</b></p>
        </div>
    );
}

export default User;