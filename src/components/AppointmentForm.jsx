import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { Label } from "./ui/label"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const AppointmentForm = ({headerText}) => {
  const [date, setDate] = useState(new Date())
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] relative">
      <div className="absolute inset-0 flex justify-center">
        <div className="text-2xl mt-3">
          <h1 className="underline">
            {headerText}
          </h1>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center sm:mt-10">  
        <div className="flex flex-col justify-center items-center mt-10">
          {/* <p className="text-sm">Select a date to book an appointment</p> */}
          <Label htmlFor="date">Select Date</Label>
        </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border mt-3"
          />
      </div>
      <div className="flex items-center justify-center py-12  h-[868px]">
        <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Your Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 w-72">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="firstName"
                placeholder="john"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="lastName"
                placeholder="Doe"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                type="contact"
                placeholder="98xxxxx"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="address"
                placeholder="ktm"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@exampl.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Book Now
            </Button>
          </div>
        </CardContent>
        </Card>
      </div>
  </div>
  )
}

export default AppointmentForm