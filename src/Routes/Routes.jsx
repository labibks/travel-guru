import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Destination from "../Pages/Destination";
import Details from '../Pages/Details'
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ForgetPass from "../Pages/ForgetPass";
import PrivetRoute from "./PrivetRoute";

 export const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout></Layout>,
     children: [
       {
         index: true,
         path: "/",
         Component: Home,
       },
       {
         path: "/login",
         Component: LoginPage,
       },
       {
         path: "/register",
         Component: RegisterPage,
       },
       {
         path: "/forget-password",
         Component: ForgetPass,
       },
       {
         path: "/booking",
         Component: Booking,
       },
       {
         path: "/destination",
         Component: Destination,
         loader: () => fetch("/destination.json"),
       },
       {
         path: "/destination/:id",
         loader: () => fetch("/destination.json"),
         element:( <PrivetRoute><Details></Details></PrivetRoute>),
       },
     ],
   },
 ]);
