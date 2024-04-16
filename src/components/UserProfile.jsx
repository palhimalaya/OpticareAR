import { CardContent, Card} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import UserProfileSetting from "./UserProfileSetting"
import { Button } from "./ui/button"



export default function UserProfile() {
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
                  src="https://source.unsplash.com/400x400/?portrait"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold text-center lg:text-left">John Doe</h1>
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">Address:</span>
                    <span className="text-gray-500">San Francisco</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Email:</span>
                    <span className="text-gray-500">abc@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Phone:</span>
                    <span className="text-gray-500">12345678</span>
                  </div>
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
            <h1 className="text-2xl font-bold">Orders</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Order ID:</span>
                  <span className="text-gray-500">123456</span>
                </div>
                <div>
                  <span className="font-semibold">Date:</span>
                  <span className="text-gray-500">12/12/2021</span>
                </div>
                <div>
                  <span className="font-semibold">Total:</span>
                  <span className="text-gray-500">$120</span>
                </div>
                <div>
                  <Button variant="outline">View Order</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Order ID:</span>
                  <span className="text-gray-500">123456</span>
                </div>
                <div>
                  <span className="font-semibold">Date:</span>
                  <span className="text-gray-500">12/12/2021</span>
                </div>
                <div>
                  <span className="font-semibold">Total:</span>
                  <span className="text-gray-500">$120</span>
                </div>
                <div>
                  <Button variant="outline">View Order</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Order ID:</span>
                  <span className="text-gray-500">123456</span>
                </div>
                <div>
                  <span className="font-semibold">Date:</span>
                  <span className="text-gray-500">12/12/2021</span>
                </div>
                <div>
                  <span className="font-semibold">Total:</span>
                  <span className="text-gray-500">$120</span>
                </div>
                <div>
                  <Button variant="outline">View Order</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}