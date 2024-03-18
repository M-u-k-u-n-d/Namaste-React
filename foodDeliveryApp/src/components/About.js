import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
    <div className="about-container">
        <User name = {"Mukund Tiwari"} role = {"Frontend Developer"}/>
        <hr/>
        <UserClass name = {"Mukund Tiwari"} role = {"Frontend Developer and Competitive Programmer"}/>
    </div>
    )
}

export default About;