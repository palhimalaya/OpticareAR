import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Link } from "react-router-dom"
export function SignUp() {
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
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm_password">Confirm password</Label>
                  <Input id="confirm_password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  Sign up with Google
                </Button>
              </div>
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
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Medical License</Label>
                  <Input
                    id="medical-license"
                    type="input"
                    placeholder="123xxxxx"
                    />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Practise Location</Label>
                  <Input
                    id="medical-license"
                    type="input"
                    placeholder="san xxx"
                    />
                </div>
                {/* <div className="grid gap-2">
                  <Label htmlFor="email">DOB</Label>
                  <Input
                    id="dob"
                    type="input"
                    placeholder="1990/11/23"
                    />
                </div> */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm_password">Confirm password</Label>
                  <Input id="confirm_password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  Sign up with Google
                </Button>
              </div>
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
  )
}
