import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AllMedicine from "../pages/admin/AllMedicine";
import UserManagement from "../pages/admin/UserManagement";
import Feedbacks from "../pages/admin/Feedbacks";
import OrderManagement from "../pages/admin/OrderManagement";
import Signup from "../pages/accounts/Signup";
import Signin from "../pages/accounts/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/accounts/sign-up",
                element: <Signup/>
            },
            {
                path: "/accounts/sign-in",
                element: <Signin/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/dashboard/all-medicine",
                element: <AllMedicine/>
            },
            {
                path: "/dashboard/user-management",
                element: <UserManagement/>
            },
            {
                path: "/dashboard/order-management",
                element: <OrderManagement/>
            },
            {
                path: "/dashboard/feedbacks",
                element: <Feedbacks/>
            },
        ]
    }
]);
export default router;