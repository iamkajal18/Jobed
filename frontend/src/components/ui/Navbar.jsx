import { Button } from "@/components/ui/button";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// import { Link } from 'lucide-react'
const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-10 max-w-7xl h-16">
        <div>
          {/* <div className="flex items-center gap-22"></div> */}
          <h1 className="font-bold text-3xl">
            Jobed<span className="text-cyan-600">In</span>
          </h1>
        </div>
        <div className="flex items-center ml-4 gap-3">
          <ul className="flex font-medium items-center gap-6">
            <li>Home</li>
            <li>Job</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/sign-in/">
                <Button
                  variant="link"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/sign-up/">
                <Button
                  variant="link"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className=" cursor-pointer w-9 h-9 ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    class=" w-9 h-9  rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-15 h-15">
                <div className="flex gap-2 space-2">
                  <Avatar className=" cursor-pointer w-9 h-9">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      class="w-9 h-9 rounded-full"
                    />
                  </Avatar>
                  <div className="items-center gap-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Kajal Kasaudhan
                    </h2>
                    <div className="flex gap-2 text-sm text-gray-600">
                      <p>Java</p>
                      <p>React</p>
                      <p>Python</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <User2></User2>
                  <Button
                    variant="link"
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    View Profile
                  </Button>
                  <LogOut></LogOut>
                  <Button
                    variant="link"
                    className="text-red-600 font-medium hover:text-red-800"
                  >
                    Logout
                  </Button>
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
