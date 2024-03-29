import React, {lazy, Suspense , useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
  const [userName , setUserName] = useState();

  useEffect(()=>{
    const data = {
      name : "Mukund Tiwari",
    }
    setUserName(data.name);
  },[])
  return (
    <UserContext.Provider value = {{loggedInUser : userName, setUserName}}>
    <div className="bg-grey-50">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback = {<h1>Loading ...</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>, 
  },
  
]);

const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
root.render(<RouterProvider router={appRouter} />);
