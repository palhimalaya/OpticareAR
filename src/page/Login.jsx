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
import { Link } from "react-router-dom"
export function Login() {
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
        <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign In</CardTitle>
          <CardDescription>
            Enter your information to Login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 w-72">
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
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/signup" className="underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
        </Card>
      </div>
    </div>
  )
}
