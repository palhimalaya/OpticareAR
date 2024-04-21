import { CardContent, Card} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import UserProfileSetting from "./UserProfileSetting"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import axios from "axios"



export default function UserProfile() {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const [appointments, setAppointments] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${baseUrl}/appointment/${userInfo._id}`);
        setAppointments(response.data.data || []);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointments();
  }, [baseUrl])
  return (
    <main className="bg-[#0000] min-h-screen p-4 lg:p-10">
      <div className="">
        <Card className="shadow-lg">
          <CardContent className="">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="w-44 h-44 relative overflow-hidden rounded-full mx-auto lg:mx-0">
                <img
                  alt="Profile"
                  height="400"
                  src= {userInfo.image_url || "https://source.unsplash.com/400x400/?portrait"}
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold text-center lg:text-left">{userInfo.firstName} {userInfo.lastName}</h1>
                  {userInfo.address && <div className="flex justify-between gap-4">
                    <span className="font-semibold">Address:</span>
                    <span className="text-gray-500">{userInfo.address}</span>
                  </div>}
                  <div className="flex justify-between">
                    <span className="font-semibold">Email:</span>
                    <span className="text-gray-500">{userInfo.email}</span>
                  </div>
                  {userInfo.phone && 
                  <div className="flex justify-between">
                    <span className="font-semibold">Phone:</span>
                    <span className="text-gray-500">{userInfo.phone}</span>
                  </div>
                  }
                </div>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <UserProfileSetting/>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10">
        <Card>
          <CardContent className="p-4">
            <h1 className="text-2xl font-bold">Appointments</h1>
            <div className="flex flex-col gap-4">
              {
                appointments.map((appointment) => (
                  <div key={appointment._id} className="border p-4 rounded-lg">
                    <div className="flex justify-between">
                     {
                      userInfo.role === "doctor" ? (
                        <div>
                          <span className="font-semibold">Patient:</span>
                          <span className="text-gray-500 ml-4">{appointment.patient.first_name} {appointment.patient.last_name}</span>
                      </div>
                      ) : (
                        <div>
                        <span className="font-semibold">Doctor:</span>
                        <span className="text-gray-500 ml-4">{appointment.doctor.first_name} {appointment.doctor.last_name}</span>
                      </div>
                      )
                     }
                    </div>
                    <div>
                      <span className="font-semibold">Date:</span>
                      <span className="text-gray-500 ml-4">{appointment.date}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Time:</span>
                      <span className="text-gray-500 ml-4">{appointment.time}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Status:</span>
                      <span className="text-gray-500 ml-4">{appointment.status}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}