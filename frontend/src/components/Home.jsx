import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"


const Home = () => {
  const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  useEffect(() => {
    if(UserInfo.role === "doctor") {
      navigate('/user');
    }
  }, []);
  return (
    <div className="container flex justify-evenly mt-7 flex-wrap">
      <div>
      <Card className="h-[50rem] w-[30rem] flex items-center justify-center flex-col space-y-2 shadow-lg">
        <h1 className="text-[10rem] leading-tight">T</h1>
        <h1 className="text-[8rem] leading-tight tracking-wide">E Y E</h1>
        <h1 className="text-[5rem] leading-tight tracking-wide">V I S I O N</h1>
        <h1 className="text-[4rem] leading-tight tracking-wide">C H E C K</h1>
        <Link to='/appointments' className="underline leading-tight tracking-wide">BOOK NOW</Link>
      </Card>
      </div>

     <div>
     <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Notices</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>1. Please wear a mask</p>
            <p>2. Please maintain social distancing</p>
            <p>3. Please sanitize your hands</p>
          </CardDescription>
        </CardContent>
      </Card>
     </div>
    </div>

  )
}

export default Home