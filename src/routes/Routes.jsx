import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Profile/Login";
import Register from "../pages/Profile/Register";
import Details from "../pages/Details";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import Error from "../pages/Error"
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader : ()=> fetch('../estates.json')
                
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute> ,
                
            },
            {
                path: '/update-profile',
                element:<PrivateRoute>
                    <UpdateProfile>
                    </UpdateProfile></PrivateRoute>
                
            },
            
        ]
    }    
]);

export default router;