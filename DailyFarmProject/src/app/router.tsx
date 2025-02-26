import {createBrowserRouter, Navigate} from "react-router-dom";
import ShowPage from "../Pages/showPage/ShowPage.tsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<Navigate to={'/search'}/>,

    },
    {
        path: '/:page',
        element: <ShowPage/>,
    },
    {
        path: '/search/:list',
        element: <ShowPage/>,
    },
])
