import { createBrowserRouter } from "react-router";
import Login from "@pages/Login";
import Layout from "@pages/Layout";
export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children:[]
    },
    {
        path: 'login',
        Component: Login
    }
])