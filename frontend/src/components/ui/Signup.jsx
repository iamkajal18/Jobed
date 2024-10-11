import React, { useState } from "react";
import Navbar from "./Navbar";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: null,
  });
  const [fileError, setFileError] = useState("");
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    if (file && !["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      setFileError("Only JPG, JPEG, and PNG files are allowed.");
      setInput({ ...input, file: null });
    } else {
      setFileError("");
      setInput({ ...input, file });
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, {
        email: input.email,
        password: input.password,
      }, {
        withCredentials: true,
      });
  
      if (res.data.success) {
        toast.success("Login successful!", {
          duration: 3000,
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/dashboard"); // Navigate after 2 seconds
        }, 2000);
      } else {
        toast.error(res.data.message || "Invalid credentials!", {
          duration: 3000,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during login, please try again.", {
        duration: 3000,
        position: "top-right",
      });
    }
  };
  
  
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-gray-200 rounded-md p-6 shadow-md bg-white mt-10 mb-10" 
        >
          <h1 className="font-bold text-2xl mb-5 text-center">Sign Up</h1>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <RadioGroup className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer w-4 h-4"
                />
                <Label>Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer w-4 h-4"
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              accept="image/*"
              onChange={changeFileHandler}
              type="file"
              className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
            {fileError && <p className="text-red-600 text-sm mt-2">{fileError}</p>}
          </div>

          <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Submit
          </Button>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
