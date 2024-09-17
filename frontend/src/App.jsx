import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import Job from "./components/ui/Job";
import Signup from "./components/ui/Signup";
import Signin from "./components/ui/Signin";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browser from "./components/ui/Browser";
import HeroSection from "./components/ui/HeroSection";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/job",
      element: <Job />,
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
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
        <HeroSection></HeroSection>
        
      </div>
    </>
  );
}

export default App;
