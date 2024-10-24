import React, { useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Google One-Tap Login
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      handleGoogleSuccess(credentialResponse);
    },
    onError: () => {
      toast.error("Google One-Tap Login Failed");
    }
  });

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log(credentialResponse.credential);
      // Send the token to your backend
      const response = await axios.post(
        "https://127.0.0.1:8000/api/login/",
        {
          credential: credentialResponse.credential
          
        }
      );

      if (response.data) {
        // Store authentication data
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("image", response.data.user.avatar_url);

        if (response.data.user.type === "Recruiter") {
          window.location.href = "https://jobedinwebsite-production.up.railway.app/admin/";
        } else {
          navigate("/");
        }
        
        toast.success("Successfully logged in with Google!");
      }
    } catch (error) {
      console.error("Google authentication error:", error);
      toast.error("Failed to authenticate with Google");
    }
  };

  const handleManualLogin = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://jobedinwebsite-production.up.railway.app/api/login/",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("image", response.data.user.image);

        if (response.data.user.type === "Recruiter") {
          window.location.href = "https://jobedinwebsite-production.up.railway.app/admin/";
        } else {
          navigate("/");
        }
        
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      console.error("Manual login error:", error);
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm border border-gray-200 rounded-md p-4 shadow-md bg-white mt-10 mb-10">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Sign In
          </h1>

          {/* Google Login Button */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                toast.error("Google Login Failed");
              }}
              theme="outline"
              size="large"
              width="100%"
              text="signin_with"
              shape="rectangular"
            />
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleManualLogin}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mx-2 my-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 mt-6"
            >
              Login
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Signin;