import { createBrowserRouter } from "react-router";
import Login from "@pages/Login";
import Layout from "@pages/Layout";
import { AuthRoute } from "@components/AuthRoute";



export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        loader: AuthRoute,
        children: [
            {
                path: '/',
                // Component: Home,
                lazy: async () => {
                    const [Component] = await Promise.all([
                        import("@pages/Home"),
                    ]);
                    return { Component: Component.default };
                },
                index: true
            },
            {
                path: '/publish',
                // Component: Publish
                lazy: async () => {
                    const [Component] = await Promise.all([
                        import("@pages/Publish"),
                    ]);
                    return { Component: Component.default };
                },
            },
            {
                path: '/article',
                // Component: Article
                lazy: async () => {
                    const [Component] = await Promise.all([
                        import("@pages/Article"),
                    ]);
                    return { Component: Component.default };
                },
            }
        ]
    },
    {
        path: 'login',
        Component: Login
    }
])