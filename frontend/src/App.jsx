import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import Job from "./components/ui/Job";
import Signup from "./components/ui/Signup";
import Signin from "./components/ui/Signin";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroSection from "./components/ui/HeroSection";
import AboutUs from "./components/ui/AboutUs";
import Services from "./components/ui/Services";
import ContactUs from "./components/ui/ContactUs";
import Profile from "./components/ui/Profile";
import JobCard from "./components/ui/jobCard";
import CompaniesList from "./components/ui/CompaniesList";


function App() {
  const job=localStorage.getItem("job");  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HeroSection></HeroSection>,
    },
    {
      path: "/home",
      element: <Home />,
    },
   

    {
      path: "/job",
      element: <Job job={job} />,
    },
    {
      path: "/jobcard/:id",
      element: <JobCard />,
    },
    {
      path: "/viewcompanies",
      element: <CompaniesList />,
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "/sign-in",
      element: <Signin />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      
      </div>
    </>
  );
}

export default App;
