import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {toast } from 'react-toastify';

export function SignUp() {
  const baseUrl = "http://localhost:8001/api";
  const navigate = useNavigate();

  useEffect(() => {
    const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (UserInfo?.token) {
      navigate("/");
    }
  },[navigate])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    medicalLicense: "",
    specialization: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e, role) => {
    e.preventDefault();
    let data = {...formData};
    if(role === "doctor") {
      data.role = "doctor";
    }
    console.log(data);
    try {
      const response = await axios.post(`${baseUrl}/user/register`, data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));

      toast.success("Signup Successful");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="lg:flex justify-center flex-col items-center hidden">
        <div>
          <img
            src="images/logo.png"
            alt="Image"
            width="476"
            height="317"
            className="object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <h1 className=" text-xl">Let&apos;s get Started</h1>
      </div>
      <div className="flex items-center justify-center py-12 bg-muted h-screen">
        <Tabs defaultValue="patent" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="patent">Patent Registration</TabsTrigger>
            <TabsTrigger value="doctor">Doctor Registration</TabsTrigger>
          </TabsList>
          <TabsContent value="patent">
            <Card className="mx-auto max-w-sm">
              <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        value={formData.firstName}
                        onChange={handleChange}
                        id="first-name"
                        name="firstName"
                        placeholder="Max"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        value={formData.lastName}
                        onChange={handleChange}
                        id="last-name"
                        name="lastName"
                        placeholder="Robinson"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      value={formData.password}
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type="password"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm_password">Confirm password</Label>
                    <Input
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      id="confirm_password"
                      name="confirmPassword"
                      type="password"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create an account
                  </Button>
                </form>
                <Button variant="outline" className="w-full mt-3">
                  Sign up with Google
                </Button>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="doctor">
            <Card className="mx-auto max-w-sm">
              <CardHeader>
                <CardTitle className="text-xl">Doctor Sign Up</CardTitle>
                <CardDescription>
                  Enter your information to create a doctor account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e)=>handleSignUp(e,"doctor")} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        value={formData.firstName}
                        name="firstName"
                        onChange={handleChange}
                        id="first-name"
                        placeholder="Max"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        value={formData.lastName}
                        onChange={handleChange}
                        id="last-name"
                        name="lastName"
                        placeholder="Robinson"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="medical-license">Medical License</Label>
                    <Input
                      id="medical-license"
                      type="input"
                      placeholder="123xxxxx"
                      onChange={handleChange}
                      name="medicalLicense"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input
                      id="specialization"
                      type="input"
                      placeholder="Heart"
                      onChange={handleChange}
                      name="specialization"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={handleChange}
                      name="email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      onChange={handleChange}
                      name="password"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm_password">Confirm password</Label>
                    <Input
                      id="confirm_password"
                      type="password"
                      onChange={handleChange}
                      name="confirmPassword"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create an account
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sign up with Google
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
