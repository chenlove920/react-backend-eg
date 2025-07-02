import { createBrowserRouter } from "react-router";
import Login from "@pages/Login";
import Layout from "@pages/Layout";
import { AuthRoute } from "@components/AuthRoute";
import Home from "@pages/Home";
import Publish from "@pages/Publish";
import Article from "@pages/Article";


export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        loader:AuthRoute,
        children: [
            {
                path:'/',
                Component: Home,
                index:true
            },
            {
                path:'/publish',
                Component:Publish
            },
            {
                path: '/article',
                Component: Article
            }
        ]
    },
    {
        path: 'login',
        Component: Login
    }
])