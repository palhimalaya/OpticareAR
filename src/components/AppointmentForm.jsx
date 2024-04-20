import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "react-toastify";


const AppointmentForm = ({ headerText }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    contact: "",
    patientId: userInfo._id,
    doctorId: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/doctors`);
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDoctorChange = (value) => {
    setSelectedDoctor(value);
    setFormData((prevData) => ({
      ...prevData,
      doctorId: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/appointment/`, formData);
      toast.success("Appointment Booked Successfully");
      setFormData({
        date: "",
        time: "",
        contact: "",
        patientId: userInfo._id,
        doctorId: "",
      
      })
      setSelectedDoctor("");

    } catch (error) {
      console.error(error);
      toast.error("Failed to Book Appointment");
    }
  };

  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{headerText}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="doctor">Select Doctor</Label>
                  <Select onValueChange={handleDoctorChange} value={selectedDoctor}>
                    <SelectTrigger >
                      <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor._id} value={doctor._id}>
                          {doctor.first_name} {doctor.last_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  type="text"
                  name="contact"
                  placeholder="9876543210"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Book Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentForm;
