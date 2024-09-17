import React, { useState } from "react";
import Navbar from "./Navbar";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { setLoading } from "@/redux/authSlice";
import { Contact, Loader2 } from "lucide-react";
// import { store } from "@/redux/store";

const Signin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading } = useSelector(store => store.auth);
// kal git sikh lenke humse ....kyuki jab tumko backend ka jarurat pade to waha se le sako aur hum bhi  aue ye dekho responsive ka kya hua

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // form data
    // Aise nhi karo

    try {
      displatch(setLoading(true));
      const res = await axios.post(
        //  backend se multer ke bare ma puchna hai
        `${USER_API_END_POINT}/sign-in`,
        input,

        {
          header: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.res.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-100% border border-gray-200 rounded-md p-4 my-15"
        >
          <h1 className="font-bold text-xl mb-5 ">Sign-in</h1>

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
            <label>Password</label>
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
          {loading ? (
              <Button>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4">
                Login
              </Button>
            )}
          <div className="flex items-center gap-2 ml-2">
            <label>Profile</label>
            <input accept="image/*" type="file" className="cursor-pointer" />
          </div>
        {/*Implement Loading image here  */}

          <br></br>
          <span>
            Don't have an account ?
            <Link to="/sign-up" className="text-blue-600">
            Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
