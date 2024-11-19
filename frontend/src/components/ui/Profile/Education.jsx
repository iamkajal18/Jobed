import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Education({education}) {
  const { id } = useParams();
  const [educationList, setEducationList] = useState([]);
  console.log(education);
//   setEducationList(education);
//   console.log("the data is ", user_education)
  const [newEducation, setNewEducation] = useState({
    degree: "",
    start_year: "",
    end_year: "",
    college_name: "",
    grade: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const degreeChoices = [
    "Bachelor of Arts (B.A.)",
    "Bachelor of Science (B.Sc.)",
    "Bachelor of Commerce (B.Com.)",
    "Bachelor of Technology (B.Tech.)",
    "Bachelor of Engineering (B.E.)",
    "Master of Business Administration (MBA)",
    "Doctor of Philosophy (Ph.D.)",
    "Diploma in Pharmacy",
  ];

  useEffect(() => {
    if (education && education.length) {
      setEducationList(education);
    }
  }, [education]);
  // Open modal for adding/editing education
  const openModal = (index = null) => {
    if (index !== null) {
      setNewEducation(educationList[index]);
      setEditingIndex(index);
    } else {
      setNewEducation({
        degree: "",
        start_year: "",
        end_year: "",
        college_name: "",
        grade: "",
      });
      setEditingIndex(null);
    }
    setIsOpen(true);
  };

  // Save or update education entry
  const saveEducation =async () => {
    if (editingIndex !== null) {
      const updatedList = [...educationList];
      updatedList[editingIndex] = newEducation;
      setEducationList(updatedList);
    } else {
      setEducationList([...educationList, newEducation]);
    }
    setNewEducation({
      degree: "",
      start_year: "",
      end_year: "",
      college_name: "",
      grade: "",
    });
    try {
        await axios.put(`https://jobedinwebsite-production.up.railway.app/api/education_update/${id}`, {
          education: educationList,
        });
        alert("Education updated successfully!");
      } catch (error) {
        console.error("Error updating education:", error);
    }
    setEditingIndex(null);
    setIsOpen(false);
  };
  
  return (
    <>
      <div className="py-3 sm:order-none order-1">
        <div className="flex justify-stretch items-center">
        
          <h2 className="text-lg font-poppins font-bold text-top-color pr-2">
            Education
          </h2>
    
          <button
            onClick={() => openModal()}>
            <svg
              className="w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
            </svg>
          </button>
        </div>
        <div className="border-2 w-20 border-top-color my-3"></div>

        {/* Education List */}
        <div className="flex flex-col space-y-4">
          {educationList.length ? (
            educationList.map((edu, index) => (
              <div
                key={index}
                className="p-2 rounded-lg flex justify-between items-center"
              >
                <div>
                    <div className="flex justify-stretch gap-2">
                  <p className="font-semibold text-gray-700">
                    {edu.start_year} - {edu.end_year}
                  </p>
                  <button
                  onClick={() => openModal(index)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="w-3 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487a2.25 2.25 0 113.182 3.182L7.32 20.393a4.5 4.5 0 01-1.682 1.086l-4.29 1.364 1.364-4.29a4.5 4.5 0 011.086-1.682L16.862 4.487z"
                    />
                  </svg>
                </button>
                </div>
                  <p className="text-sm">
                    <span className="font-bold text-green-700">
                      {edu.college_name}
                    </span>
                    
                  </p>
                  <p className="text-sm">
                    <span className="font-bold text-gray-700">
                    {edu.degree}
                    </span>
                    
                  </p>
                  
                  
                  <p className="text-xs text-gray-700">
                    Grade: {edu.grade || "N/A"}
                  </p>
                  
               
                </div>
                
              </div>
            ))
          ) : (
            <p className="text-sm font-medium">No education details added.</p>
          )}
        </div>

        {/* Add/Edit Education Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[425px] max-w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">
                {editingIndex !== null ? "Edit Education" : "Add Education"}
              </h3>
              <form className="space-y-4">
                <select
                  value={newEducation.degree}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, degree: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="">Select Degree</option>
                  {degreeChoices.map((degree, index) => (
                    <option key={index} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={newEducation.start_year}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      start_year: e.target.value,
                    })
                  }
                  placeholder="Start Year"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="text"
                  value={newEducation.end_year}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      end_year: e.target.value,
                    })
                  }
                  placeholder="End Year"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="text"
                  value={newEducation.college_name}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      college_name: e.target.value,
                    })
                  }
                  placeholder="College Name"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="text"
                  value={newEducation.grade}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      grade: e.target.value,
                    })
                  }
                  placeholder="Grade/Percentage"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </form>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEducation}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Education;
