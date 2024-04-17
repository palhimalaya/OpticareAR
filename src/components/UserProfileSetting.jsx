import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card, CardDescription } from "@/components/ui/card"

const UserProfileSetting = () => {
  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle>User Profile Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center space-x-5">
        <Card className="w-full max-w-lg">
      <CardHeader className="pb-0">
        <CardTitle>Upload Photo</CardTitle>
        <CardDescription CardDescription>Accepted file types: .png, .jpg, .gif</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 relative overflow-hidden rounded-lg">
            <img
              alt="Preview"
              height="100"
              src="https://source.unsplash.com/400x400/?portrait"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <div className="space-y-2 text-sm mt-2">
            <div className="relative inline-block w-64">
              <input accept=".png, .jpg, .gif" id="file" type="file" className="absolute inset-0 w-full h-full opacity-0" />
              <label htmlFor="file" className="flex justify-center items-center space-x-2 px-4 py-2 bg-white text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                <span>Choose File</span>
              </label>
            </div>
            <div className="flex gap-4 text-sm">
              <Button>Upload</Button>
              <Button variant="outline">Remove Image</Button>
            </div>
          </div>
        </div>
      </CardContent>
     </Card>
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Name</Label>
          <Input id="name" placeholder="Enter your Name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" placeholder="Enter your password" type="password" />
        </div>
      </CardContent>
    <CardFooter>
      <Button className="ml-auto bg-green-500 text-white">Save Changes</Button>
    </CardFooter>
    </Card>
  )
}

export default UserProfileSetting