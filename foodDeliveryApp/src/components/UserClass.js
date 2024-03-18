import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value : 72,
            value2: 99,
        }
    }
    render(){
        const {value,value2} = this.state;
        const {name,role} = this.props;
        return (
            <div className="user-container">
            <h2>Hii, This is {name}</h2>
            <h3>A {role}</h3>
            <p>Creating a Food Delivery App using React <b>Class Based</b> components</p>
            <p>Value using Class Based variable = <b>{value}, {value2}</b></p>

            </div>
        );
    }
}

export default UserClass;