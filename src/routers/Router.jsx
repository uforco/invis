import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/homepage/Home";
import OurService from "../pages/OurServices/serviceHomePage/OurService";
import Contact from "../pages/contact/contactHomepage/Contact";
import HowToStartHome from "../pages/howToStart/howToStartHomePage/HowToStartHome";



const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        { 
            path: "how_to_start",
            element: <HowToStartHome></HowToStartHome>
        },
        { 
            path: "services",
            element: <OurService></OurService>
        },
        {
            path: "contact",
            element: <Contact></Contact>
        },
      ]                                                                         
    },
  ]);

export default Router;