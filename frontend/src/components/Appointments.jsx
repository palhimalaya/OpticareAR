import {
  Card,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
const Appointments = () => {
  return (
    <div className="container flex flex-row justify-evenly flex-wrap items-center h-[90%]">
      <Link to='/appointment-eyes'>
        <Card className="h-[36rem] relative flex items-center justify-center flex-col space-y-2 shadow-lg p-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/27/68/27/1000_F_127682737_2zQEj1IUv1J6cSUrQRYwAklzLzDzVNpN.jpg"
            alt="eye"
            height={500}
            width={500}
            className="rounded-xl"
            />
          <p className="absolute bottom-3 underline leading-tight tracking-wide mt-4 text-xl">Appointment for your eyes</p>
        </Card>
      </Link>
      <Link to='/appointment-glasses'>
        <Card className="relative h-[36rem] flex items-center justify-center flex-col space-y-2 shadow-lg p-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <img
              src="https://i.ebayimg.com/images/g/JQkAAOSwYd5j9fc6/s-l1200.jpg"
              alt="eye"
              height={500}
              width={500}
              className="rounded-xl"
              />
          <p className="absolute bottom-3 underline leading-tight tracking-wide text-xl">Appointment for your glasses</p>
        </Card>
      </Link>
  </div>
  )
}

export default Appointments