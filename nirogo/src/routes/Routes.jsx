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
import Profile from "../pages/accounts/Profile";
import AddProduct from "../pages/admin/AddProduct";
import Settings from "../pages/admin/Settings";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true, 
                element: <Home />
            },
            {
                path: "all-products", 
                element: <AllProducts/>
            },
            {
                path: "product/:slug", 
                element: <ProductDetails />
            },
            {
                path: "account/profile", 
                element: <Profile/>
            },
            {
                path: "accounts/sign-up", 
                element: <Signup/>
            },
            {
                path: "accounts/sign-in", 
                element: <Signin/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
            {
                index: true, 
                element: <Dashboard />
            },
            {
                path: "all-medicine", 
                element: <AllMedicine/>
            },
            {
                path: "add-product", 
                element: <AddProduct/>
            },
            {
                path: "user-management", 
                element: <UserManagement/>
            },
            {
                path: "order-management",
                element: <OrderManagement/>
            },
            {
                path: "feedbacks", 
                element: <Feedbacks/>
            },
            {
                path: "settings", 
                element: <Settings/>
            },
        ]
    }
]);
export default router;