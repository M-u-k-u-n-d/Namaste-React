import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
            name : "dummy",
            bio : "dummyRole",
            location : "Ballia",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/M-u-k-u-n-d");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render(){
      const {name , bio , location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-container">
            <img src={avatar_url} alt="avatar"/>
            <h2>Name fetched from UserContext :  
                <UserContext.Consumer>
                    {
                        ({loggedInUser})=>
                            (<span className="font-semibold"> {loggedInUser}</span>)
                        
                    }
                </UserContext.Consumer>
            </h2>
            <h5>Role : {bio}</h5>
            <h6>City : {location}</h6>
            </div>
        );
    }
}
    export default UserClass;