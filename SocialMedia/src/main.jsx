import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostList, { postLoader } from './components/PostList.jsx'
const router = createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
      {path:"/create-post", element:<CreatePost/>, action: createPostAction},
      {path:"/", element:<PostList/>, loader: postLoader}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
