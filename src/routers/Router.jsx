import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/homepage/Home";
import OurService from "../pages/OurServices/serviceHomePage/OurService";



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
            path: "services",
            element: <OurService></OurService>
        }
      ]                                                                         
    },
  ]);

export default Router;