import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";

export default createBrowserRouter([
    {
        path: '/',
        Component: Login,
        children:[]
    }
])