import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(
          "https://example.com/api/profile", // Replace with your API
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('access_token');
      await axios.post(
        "https://example.com/api/logout", // Replace with your logout API
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear tokens and redirect to login page
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      navigate('/login');
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center">
          <img
            src={userData.profilePhoto || "default_profile.jpg"} // Fallback if no profile photo
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-700">{userData.email}</p>
            <p className="text-gray-700">{userData.role}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <div className="mt-4">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Role:</strong> {userData.role}
            </p>
            {/* Add more fields as needed */}
          </div>

          <Button
            onClick={handleLogout}
            className="mt-6 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
