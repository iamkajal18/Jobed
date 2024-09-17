import React, { useState } from "react";
import Navbar from "./Navbar";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import axios from "axios";


const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  
 
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changefileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // form data
    // Aise nhi karo

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        header: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/sign-in");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.res.data.message); //console kiye hai
    }
    
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 ">Sign-up</h1>
          <div className="  my-2 ">
            <label>Full Name</label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your Name"
              className="ml-2 text-center"
            />
          </div>
          <div className="my-2 ">
            <label>Email</label>
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your Email"
              className="ml-2 text-center"
            />
          </div>
          <div className="my-2 ">
            <label>Phone Numbe</label>
            <input
              type="text"
              value={input.phoneNumber}
              // sabme name imp hai
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your Phone Number"
              className="ml-2 text-center"
            />
          </div>
          <div className="my-2 ">
            <label>Passwor</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your Password"
              className="ml-2 text-center"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              className="flex items-center gap-4 my-5"
              defaultValue="default"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer w-4 h-4 border border-gray-300 rounded-full"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div
                className="flex items-center space-x-2"
                defaultValue="default"
              >
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer w-4 h-4 border border-gray-300 rounded-full"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
         
          <div className="flex items-center gap-2 ml-2">
            <label>Profile </label>
            <input
              accept="image/*"
              onChange={changefileHandler}
              type="file"
              className="cursor-pointer"
            />
          </div>
         
          <Button type="submit" className="w-full my-4">
            Submit
          </Button>

          <span>
            Already have an account ?
            <Link to="/sign-in" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
