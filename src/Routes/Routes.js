import { createBrowserRouter } from "react-router-dom";
import CourseDetail from "../components/Courses/CourseDetail/CourseDetail";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
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
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://b610-learning-platform-server-side-one.vercel.app/course/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])