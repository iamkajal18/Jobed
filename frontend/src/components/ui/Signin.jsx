import React, { useState } from "react";
import Navbar from "./Navbar";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const res = await axios.post(
        "https://jobedinwebsite-production.up.railway.app/api/login/",
        {
          username: username,
          password: password,
        }
      );
      console.log(res.data.success);
      if (res.data.success){
        console.log("Login successful",res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("image", res.data.user.image);
        localStorage.setItem("refresh", res.data.refresh);
        console.log(res.data.user.type);
        if (res.data.user.type==="Recruiter"){
          window.location.href = "https://jobedinwebsite-production.up.railway.app/admin/";
        }
        navigate("/");
      }
      else{
        console.log("Login failed",res.data);
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed",error);
    }

  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-sm border border-gray-200 rounded-md p-4 shadow-md bg-white mt-10 mb-10"
        >
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Sign In
          </h1>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mx-2 my-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mx-2 my-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="flex items-center space-x-6 mx-2 my-2">
            <RadioGroup
              className="flex gap-4"
              value={role}
              onValueChange={setRole}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="Student"
                  checked={role === "Student"}
                  onChange={() => setRole("Student")}
                  className="cursor-pointer w-4 h-4"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2 mx-2 my-2">
                <input
                  type="radio"
                  id="recruiter"
                  name="role"
                  value="Recruiter"
                  checked={role === "Recruiter"}
                  onChange={() => setRole("Recruiter")}
                  className="cursor-pointer w-4 h-4"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Login
          </Button>

          {/* Footer: Google and Facebook Auth */}
          <div className="flex flex-col items-center space-y-3 mt-6">
            <p className="text-sm text-gray-500">Or continue with</p>
            <div className="flex space-x-4">
              <Button
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                onClick={() =>
                  (window.location.href =
                    "https://jobedinwebsite-production.up.railway.app/accounts/google/login/")
                }
              >
               Google
              </Button>
              <Button
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                onClick={() =>
                  (window.location.href =
                    "https://jobedinwebsite-production.up.railway.app/accounts/github/login/")
                }
              >
               Github
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Signin;
