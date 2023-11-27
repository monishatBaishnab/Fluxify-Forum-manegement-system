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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'user-profile',
                element: <UserHome />
            },
            {
                path: 'add-post',
                element: <AddPost />
            },
            {
                path: 'my-post',
                element: <MyPosts />
            },
            {
                path: 'comments/:id',
                element: <Comments />
            },
            {
                path: 'admin-profile',
                element: <AdminHome />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            {
                path: 'reported-comments',
                element: <ReportedComments />
            },
            {
                path: 'announcement',
                element: <Announcement />
            }
        ]
    }
])

export default Routes;