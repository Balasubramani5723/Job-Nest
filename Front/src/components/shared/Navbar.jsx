import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { User2, LogOut, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { setUser } from "../../redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="bg-white border-b-2 border-gray-300 w-full shadow-md z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div onClick={() => handleNavigation("/")} className="cursor-pointer">
          <h1 className="text-2xl font-bold italic">
            Job<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>

        <button
          className="block md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} />
        </button>

        <div
          className={`${
            open ? "block" : "hidden"
          } absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center gap-12 p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <button
                    onClick={() => handleNavigation("/admin/companies")}
                    className="hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Companies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/admin/jobs")}
                    className="hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Jobs
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/jobs")}
                    className="hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Jobs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/browse")}
                    className="hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Browse
                  </button>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => handleNavigation("/login")}
                className="w-full md:w-auto"
              >
                <Button variant="outline">Login</Button>
              </button>
              <button
                onClick={() => handleNavigation("/signup")}
                className="w-full md:w-auto"
              >
                <Button className="bg-gradient-to-l from-[#7d469d]  to-[#ff0076] hover:from-[#7d469d] hover:to-[#ff0076]">
                  Signup
                </Button>
              </button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="User" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="User"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
