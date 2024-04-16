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
    <CardDescription>Accepted file types: .png, .jpg, .gif</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-6">
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
      <div className="space-y-4 text-sm">
        <div>
          <Label htmlFor="file">Upload File</Label>
          <Input accept=".png, .jpg, .gif" id="file" type="file" />
        </div>
        <div className="flex gap-4">
          <Button>Upload</Button>
          <Button variant="outline">Remove Image</Button>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Name</Label>
        <Input id="name" placeholder="Enter your Name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email" type="email" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input id="password" placeholder="Enter your password" type="password" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <Label htmlFor="confirm-password">Confirm Password</Label>
        </div>
          <Input id="confirm-password" placeholder="Enter your confirm password" type="password" />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="ml-auto bg-green-500 text-white">Save Changes</Button>
    </CardFooter>
  </Card>
  )
}

export default UserProfileSetting