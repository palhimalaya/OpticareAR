import {
  Bell,
  CircleUser,
  Menu,
  Search,
  LayoutGrid,
  Info,
  CalendarRange,
  Contact,
  Glasses,
  ShoppingCart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toogle"
import Cart from "@/components/Cart"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(!UserInfo) {
      navigate('/login');
    }
    setUserData(UserInfo);
  },[navigate])
  const location = useLocation();
  const handleLogout= ()=>{
    localStorage.removeItem("userInfo");
    window.location.href = "/login";
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className={`flex items-center gap-2 font-semibold`}>
              <img
               src="/images/logo.png" 
               alt="OpticareAR" 
               className=" h-10 w-14" />
              <span className="">OpticareAR</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-lg font-medium lg:px-4">
              <Link
                to="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === `/` ? "bg-muted" : 'text-muted-foreground'}`}
              >
                <LayoutGrid className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/user"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === `/user` ? "bg-muted" : 'text-muted-foreground'}`}
              >
                <CircleUser className="h-4 w-4" />
                User Profile
              </Link>
              <Link
                to="/about"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === `/about` ? "bg-muted" : 'text-muted-foreground'}`}
              >
                <Info className="h-4 w-4" />
                About us{" "}
              </Link>
              <Link
                to="/products"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === `/products` ? "bg-muted" : 'text-muted-foreground'}`}
              >
                <Glasses className="h-4 w-4" />
                AR glasses
              </Link>
              <Link
                to="/appointments"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === `/appointments` ? "bg-muted" : 'text-muted-foreground'}`}
              >
                <CalendarRange className="h-4 w-4" />
                Appointments
              </Link>
              <Link
                to="/contact"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === `/contact` ? "bg-muted" : 'text-muted-foreground'}`}
              >
                <Contact className="h-4 w-4" />
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                   <img
               src="/images/logo.png" 
               alt="OpticareAR" 
               className=" h-10 w-14" />
              <span className="">OpticareAR</span>
                </Link>
                <Link
                  to="/"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${location.pathname === `/` ? "bg-muted" : 'text-muted-foreground'}`}
                >
                  <LayoutGrid className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  to="/user"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${location.pathname === `/user` ? "bg-muted" : 'text-muted-foreground'}`}
                >
                  <CircleUser className="h-5 w-5" />
                User Profile
                </Link>
                <Link
                  to="about"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${location.pathname === `/about` ? "bg-muted" : 'text-muted-foreground'}`}
                >
                  <Info className="h-5 w-5" />
                About us{" "}
                </Link>
                <Link
                  to="/products"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${location.pathname === `/products` ? "bg-muted" : 'text-muted-foreground'}`}
                >
                 <Glasses className="h-5 w-5" />
                AR glasses
                </Link>
                <Link
                  to="/appointments"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${location.pathname === `/appointments` ? "bg-muted" : 'text-muted-foreground'}`}
                >
                  <CalendarRange className="h-5 w-5" />
                Appointments
                </Link>
                <Link
                  to="/contact"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${location.pathname === `/contact` ? "bg-muted" : 'text-muted-foreground'}`}
                >
                   <Contact className="h-5 w-5" />
                Contact us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <Button variant="secondary" size="icon" className="rounded-full">
            <ModeToggle/>
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Sheet>
                <SheetTrigger>
                  <ShoppingCart />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <Cart/>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{userData.firstName}  {userData.lastName}</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <Outlet/>
      </div>
    </div>
  )
}
