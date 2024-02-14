import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Technologies from './components/technologies/Technologies'
import Java from './components/java/Java'
import Nodejs from './components/nodeJS/Nodejs'
import Vue from './components/vue/Vue'
import UserProfile from './components/user-profile/UserProfile';

function App() {
  //create BrowserRouter object
  let browserRouter = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'user-profile',
          element:<UserProfile />
        },
        {
          path:'technologies',
          element:<Technologies/>,
          children:[
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'nodejs',
              element:<Nodejs/>
            },
            {
              path:'vue',
              element:<Vue/>
            },
            {
              path:'',
              element:<Navigate to='java'/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={browserRouter}/>
  );
}

export default App;
