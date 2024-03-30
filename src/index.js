import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Error from "./components/Error";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './index.css';


const App = ()=> {
 return(
  <div>
    <NavBar/>
   <Outlet />
    

    <SocialLinks />
  </div>
  
 )
}

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<App />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/home",
          element:<Home />
        },
        {
          path: "/about",
          element:<About />
        },
        {
          path:"/portfolio",
          element:<Portfolio />
        },
        {
          path:"/skills",
          element:<Skills />
        },
        {
          path:"/contact",
          element:<Contact />
        }
      ],
      errorElement:<Error />
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
