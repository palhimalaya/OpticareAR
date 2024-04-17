import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "@/error-page";
import { Login } from "@/page/Login";
import { SignUp } from "@/page/SignUp";
import Dashboard from "@/page/Dashboard";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./page/AboutUs";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import Appointments from "./components/Appointments";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Dashboard/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'product/:id',
        element: <ProductDetail/>
      },
      {
        path: 'appointments',
        element: <Appointments/>
      },
      {
        path: 'user',
        element: <UserProfile/>
      },
      {
        path: 'about',
        element: <AboutUs/>
      },
      {
        path: 'contact',
        element: <Products/>
      },
      {
        path: 'appointment-glasses',
        element: <Products/>
      },
      {
        path: 'appointment-eyes',
        element: <Products/>
      },
    ]
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  }
])