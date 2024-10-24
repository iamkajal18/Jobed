import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // Handle Google Authentication on component mount
  useEffect(() => {
    const handleGoogleAuth = async () => {
      console.log("Current URL:", window.location.href);
      
      const urlParams = new URLSearchParams(window.location.search);
      console.log("URL Parameters:", Object.fromEntries(urlParams.entries()));

      // Check for different possible token parameters
      const token = urlParams.get("token") || 
                   urlParams.get("access_token") || 
                   urlParams.get("id_token");
                   
      console.log("Found token:", token);
      
      try {
        // Get user info from Google
        const userInfoResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (userInfoResponse.data) {
          // Store authentication data
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userInfoResponse.data.user));
          localStorage.setItem("image", userInfoResponse.data.user.avtar_url);


          if (userInfoResponse.data.user.type === "Recruiter") {
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

    handleGoogleAuth();
  }, [navigate]);

  // Handle Manual Login
  const handleManualLogin = async (e) => {
    e.preventDefault();
    
    if (!username || !password ) {
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


  const handleSocialLogin = (provider) => {
    const baseUrl = "https://jobedinwebsite-production.up.railway.app/accounts";
    const urls = {
      google: `${baseUrl}/google/login/`,
      github: `${baseUrl}/github/login/`
    };
    
    window.location.href = urls[provider];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleManualLogin}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

         

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Login
          </Button>

          <div className="flex flex-col items-center space-y-3 mt-6">
            <p className="text-sm text-gray-500">Or continue with</p>
            <div className="flex space-x-4">
              <Button
                type="button"
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                onClick={() => handleSocialLogin('google')}
              >
                Google
              </Button>
              <Button
                type="button"
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                onClick={() => handleSocialLogin('github')}
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

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Signin;