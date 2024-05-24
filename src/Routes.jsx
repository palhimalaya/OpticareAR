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
import AppointmentForm from "./components/AppointmentForm";
import ContactUs from "./page/ContactUs";
import AddProducts from "./page/AddProducts";
import Checkout from "./page/Checkout";
import NotificationPage from "./page/NotificationPage";
import DoctorReview from "./page/DoctorReview";
import PerDoctorReviews from "./components/PerDoctorReviews";
import AppCanvas from "./page/AppCanvas";

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
        element: <ContactUs/>
      },
      {
        path: 'appointment-glasses',
        element: <AppointmentForm headerText={"Book an Appointment For Your Glasses"}/>
      },
      {
        path: 'appointment-eyes',
        element: <AppointmentForm headerText={"Book an Appointment For Your Eyes"}/>
      },
      {
        path: 'addProducts',
        element: <AddProducts/>
      },
      {
        path: "checkout",
        element: <Checkout/>
      },
      {
        path: "notifications",
        element: <NotificationPage/>
      },
      {
        path: "doctor-reviews",
        element: <DoctorReview/>,
      },
      {
        path: "doctor-reviews/:doctorId",
        element: <PerDoctorReviews/>
      },
  
      {
        path: "try-it-on/:sku",
        element: <AppCanvas/>,
      }
    ]
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  }
])