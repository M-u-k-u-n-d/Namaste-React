import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Demo_Name",
})

export default UserContext;