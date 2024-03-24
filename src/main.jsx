import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from '../Layouts/MainLayout.jsx';
import Blogs from './Components/Pages/Blogs.jsx';
import BookMarks from './Components/Pages/BookMarks.jsx';
import Home from './Components/Pages/Home.jsx';
import Blog from './Components/Pages/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      
      {
        path: '/blogs',
        element:<Blogs />,
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`)
      },
      {
        path:'/blog/:id',
        element: <Blog />,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path:'/bookMarks',
        element: <BookMarks />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
