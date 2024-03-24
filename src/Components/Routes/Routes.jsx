import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import BookMarks from "../Pages/BookMarks";
import Content from "../Content/Content";
import Author from "../Author/Author";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`)
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index:true,
                        element:<Content />,
                        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
                    },
                    {
                        path: 'author',
                        element:<Author />,
                        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
                    }
                ]

            },
            {
                path: '/bookMarks',
                element: <BookMarks />
            }
        ]
    },
]);

export default router