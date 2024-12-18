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
import JobCard from "./components/ui/jobCard";
import { GoogleOAuthProvider } from '@react-oauth/google';
import CompaniesList from "./components/ui/CompaniesList";
import ProfileDetails from "./components/ui/ProfileDetails";



function App() {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HeroSection />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/job",
      element: <Job  />,
    },
    {
      path: "/jobcard/:id",
      element: <JobCard />,
    },
    {
      path:"/profile/:id",
      element:<ProfileDetails></ProfileDetails>
    }
,

    {
      path: "/viewcompanies",
      element: <CompaniesList />,
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
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="app">
        <RouterProvider router={appRouter} />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
