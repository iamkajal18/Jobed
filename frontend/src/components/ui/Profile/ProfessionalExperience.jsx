import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Ensure you're importing this hook
import axios from "axios";

const ProfessionalExperience = ({ userExperiences }) => {
  const { id } = useParams(); // Extract `id` from URL parameters

  // State management
  const [expList, setExpList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [exp, setNewExp] = useState({
    company_name: "",
    position: "",
    work_type: "",
    location: "",
    start_date: "",
    end_date: "",
    responsibilities: "",
  });

  // Populate experience list when the user experiences are passed
  useEffect(() => {
    if (userExperiences && userExperiences.length) {
      setExpList(userExperiences);
    }
  }, [userExperiences]);

  // Open modal for editing or adding an experience
  const openModal = (index = null) => {
    if (index !== null) {
      setNewExp(expList[index]);
      setEditingIndex(index);
    } else {
      setNewExp({
        company_name: "",
        position: "",
        work_type: "",
        location: "",
        start_date: "",
        end_date: "",
        responsibilities: "",
      });
      setEditingIndex(null);
    }
    setIsOpen(true);
  };

  // Save experience
  const saveExp = async () => {
    if (editingIndex !== null) {
      const updatedList = [...expList];
      updatedList[editingIndex] = exp;
      setExpList(updatedList);
    } else {
      setExpList([...expList, exp]);
    }

    // Reset state
    setEditingIndex(null);
    setIsOpen(false);
    setNewExp({
      company_name: "",
      position: "",
      work_type: "",
      location: "",
      start_date: "",
      end_date: "",
      responsibilities: "",
    });

    // Send updated experience to the backend
    try {
      await axios.put(
        `https://jobedinwebsite-production.up.railway.app/api/experience_update/${id}`,
        { experience: expList }
      );
      alert("Experience updated successfully!");
    } catch (error) {
      alert("Failed to update experience. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="py-3">
      {/* Header with Add Button */}
      <div className="flex justify-stretch">
        <h2 className="text-lg font-poppins font-bold text-top-color">
          Professional Experience
        </h2>
        <button onClick={() => openModal()}>
          <svg
            className="w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="border-2 w-20 border-top-color my-3"></div>

      {/* Experience List */}
      <div className="flex flex-col">
        {expList.length > 0 ? (
          expList.map((experience, index) => (
            <div key={index} className="flex flex-col my-4">
              <div className="flex justify-stretch">
                <p className="text-md font-bold text-gray-700">
                  {experience.company_name} | {experience.position}
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
              <p className="font-semibold text-sm text-gray-700">
                {experience.start_date} - {experience.end_date || "Present"}
              </p>
              <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                Key Responsibilities
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {experience?.responsibilities
                  ?.split(",")
                  .map((responsibility, idx) => (
                    <li key={idx}>{responsibility.trim()}</li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-sm font-medium">Please update your experience</p>
        )}
      </div>

      {/* Modal for Add/Edit */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-[500px] max-w-full p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {editingIndex !== null ? "Edit Experience" : "Add Experience"}
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                value={exp.company_name}
                onChange={(e) =>
                  setNewExp({ ...exp, company_name: e.target.value })
                }
                placeholder="Company"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={exp.position}
                onChange={(e) =>
                  setNewExp({ ...exp, position: e.target.value })
                }
                placeholder="Position"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={exp.start_date}
                  onChange={(e) =>
                    setNewExp({ ...exp, start_date: e.target.value })
                  }
                  placeholder="Start Date"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={exp.end_date}
                  onChange={(e) =>
                    setNewExp({ ...exp, end_date: e.target.value })
                  }
                  placeholder="End Date"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                value={exp.responsibilities}
                onChange={(e) =>
                  setNewExp({ ...exp, responsibilities: e.target.value })
                }
                placeholder="Responsibilities (comma-separated)"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={saveExp}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalExperience;
