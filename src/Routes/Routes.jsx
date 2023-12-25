import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PostDetails from "../pages/PostDetails/PostDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../pages/Dashboard/User/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AddPost from "../pages/Dashboard/User/AddPost";
import MyPosts from "../pages/Dashboard/User/MyPosts";
import Comments from "../pages/Dashboard/User/Comments";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Announcement from "../pages/Dashboard/Admin/Announcement";
import ReportedComments from "../pages/Dashboard/Admin/ReportedComments";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Dashboard/User/Payment";
import Membership from "../pages/Membership/Membership";
import About from "../pages/About/About";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'membership',
                element: <Membership />
            },
            {
                path: 'about-us',
                element: <About />
            },
            {
                path: 'posts/:id',
                element: <PrivateRoute><PostDetails /></PrivateRoute>
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'user-profile',
                element: <PrivateRoute><UserHome /></PrivateRoute>
            },
            {
                path: 'add-post',
                element: <PrivateRoute><AddPost /></PrivateRoute>
            },
            {
                path: 'my-post',
                element: <PrivateRoute><MyPosts /></PrivateRoute>
            },
            {
                path: 'comments/:id',
                element: <PrivateRoute><Comments /></PrivateRoute>
            },
            {
                path: 'admin-profile',
                element: <AdminRoute><PrivateRoute><AdminHome /></PrivateRoute></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><PrivateRoute><ManageUsers /></PrivateRoute></AdminRoute>
            },
            {
                path: 'reported-comments',
                element: <AdminRoute><PrivateRoute><ReportedComments /></PrivateRoute></AdminRoute>
            },
            {
                path: 'announcement',
                element: <AdminRoute><PrivateRoute><Announcement /></PrivateRoute></AdminRoute>
            },
            {
                path: 'payment',
                element: <AdminRoute><PrivateRoute><Payment /></PrivateRoute></AdminRoute>
            }
        ]
    }
])

export default Routes;