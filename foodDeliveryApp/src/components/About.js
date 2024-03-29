import UserClass from "./UserClass";
import React from "react";
import User from "./User";

class About extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="about-container">
                <UserClass name = {"Mukund"} role = {"Frontend Developer and Competitive Programmer"}/>
                <User name = {"Mukund"} role = {"Frontend Developer and Competitive Programmer"}/>
            </div>
            );
    }
}


export default About;