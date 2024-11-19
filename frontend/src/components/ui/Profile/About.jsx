import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// now makign the main function
function About() {
  // api call for get
  const { id } = useParams();
  // setting the state variable
  const [about, setAbout] = useState("Hey Aditya welcome to the jobedin, update your about me ! Recruiters nowdays get attracted by knowing you more");
  const [isOpen, setIsOpen] = useState(false);
  const fetchAbout = async () => {
    const response = await axios.get(
      `https://jobedinwebsite-production.up.railway.app/api/about_get/${id}`
    )
      setAbout(response.data.data.about);
  };
  useEffect(() => {
    fetchAbout();
  }, [id]);
  const updateAbout = async () => {
    try{
    const response = await axios.put(
      `https://jobedinwebsite-production.up.railway.app/api/about_update/${id}`,
      {about}
    );
    setIsOpen(false);
    setAbout(response.data.about);
    }
    catch(error){
      console.error("Error updating about:", error);
    }
  };
  return (
    <>
      <div class="py-3">
      <div className="flex justify-stretch">
          <h2 className="text-lg font-poppins font-bold text-top-color pr-2">
           About
          </h2>
          <button onClick={() => setIsOpen(true)}>
            <svg
              className="w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
            </svg>
          </button>
        </div>
        <div class="border-2 w-20 border-top-color my-3"></div>
        {/* the actual data */}
        <p class="text-sm font-medium">
          {about}
        </p>
        {/* is open  */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[425px] max-w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Edit About</h3>

              <input
                type="text"
                value={about}
                onChange={(e) =>setAbout(e.target.value)}
                placeholder="Write about you"
                className="w-full px-3 py-2 border rounded-md mb-4"
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={updateAbout}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default About;
