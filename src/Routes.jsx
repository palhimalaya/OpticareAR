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
        path: 'products',
        element: <Products/>
      },
      {
        path: 'product/:id',
        element: <ProductDetail/>
      },
      {
        path: 'appointments',
        element: <Products/>
      },
      {
        path: 'user',
        element: <Products/>
      },
      {
        path: 'about',
        element: <AboutUs/>
      },
      {
        path: 'contact',
        element: <Products/>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  }
])