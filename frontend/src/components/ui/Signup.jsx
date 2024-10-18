import React, { useState } from "react";
import Navbar from "./Navbar";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const Signup = () => {
  // State to manage form inputs and file
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    username: "",
    file: null,
  });

  const [fileError, setFileError] = useState("");
  const navigate = useNavigate();

  // Handler for input change
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handler for file change
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

  // Form submission handler
  const submitHandler = async (e) => {
    e.preventDefault();

    // Create form data to send the inputs and the file
    const formData = new FormData();
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("first_name", input.fullname);
    formData.append("mobile_number", input.phoneNumber);
    formData.append("type", "Student"); // Static type for now
    formData.append("username", input.username); // Static username for now
    console.log(formData);
    if (input.file) {
      formData.append("image", input.file); // Append the image file
    }

    try {
      const res = await axios.post(
        "https://127.0.0.1:8000/api/register/",
        formData, // Send formData including the image
        {
          headers: {

            "Content-Type": "multipart/form-data", // Important for file upload
          },
          withCredentials: true, 
        }
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success (res.data.message || "Signup successful!",  {
          duration: 3000,
          position: "top-right",
        });
        navigate("/sign-in");
      } else {
        toast.error(res.data.message || "Signup failed!", {
          duration: 3000,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Some thing is bugg", {
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
          <label className="block text-sm font-medium text-gray-700">
          Full Name
            </label>
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
          <label className="block text-sm font-medium text-gray-700">
          UserName
            </label>
    
            <input
              type="text"
              value={input.username}
              name="username"
              onChange={changeEventHandler}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="my-4">
          <label className="block text-sm font-medium text-gray-700">
          Email
            </label>
          
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
          <label className="block text-sm font-medium text-gray-700">
          Mobile Number
            </label>
    
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
          <label className="block text-sm font-medium text-gray-700">
          Password
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              accept="image/*"
              onChange={changeFileHandler}
              type="file"
              className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
            {fileError && (
              <p className="text-red-600 text-sm mt-2">{fileError}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Submit
          </Button>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
