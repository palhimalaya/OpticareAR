import { RouterProvider } from "react-router-dom"
import { router } from "./Routes"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import './App.css'

const App = () => {
  return (
    <>
        <ToastContainer/>
        <RouterProvider router={router} />
      </>
  )
}

export default App