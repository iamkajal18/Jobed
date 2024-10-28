import { FaPencilAlt } from "react-icons/fa";
import {useEffect,useState} from "react";
const fetchProfile=async()=>{
  const[profile,setProfile]=useState(null);
  const[loading,setLoading]=useState(true);
  try{
    const response =await axios.get("https://jobedinwebsite-production.up.railway.app/api/user-data/");
    console.log(response);
    setProfile(response.data.profile);


  }
  catch(error){

  }
}
function ProfileCard() {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg">
          <FaPencilAlt className="text-gray-600 hover:text-gray-800" />
        </button>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Your Name</h2>
        <p className="text-gray-600">Your Job Title</p>
        <p className="text-gray-500 mt-2">Your bio or short description goes here. You can add more information as needed.</p>
      </div>
    </div>
  );
}

export default ProfileCard;
