import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://b610-learning-platform-server-side-one.vercel.app/courses'),
                element: <Courses></Courses>
            }
        ]
    }
])