import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Posts from "../Components/Posts/Posts";
import Users from "../Components/Users/Users";
import Contact from "../Components/Contact/Contact";
import ShowDetails from "../Components/ShowDetails/ShowDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/posts',
                element: <Posts />,
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
            },
            {
                path: '/posts/post/:id',
                element: <ShowDetails />,
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

export default router;