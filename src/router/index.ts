import { createBrowserRouter } from "react-router";
import Login from "@pages/Login";
import Layout from "@pages/Layout";
import { AuthRoute } from "@components/AuthRoute";


export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        loader:AuthRoute,
        children: []
    },
    {
        path: 'login',
        Component: Login
    }
])