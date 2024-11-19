import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Skill from "./Profile/Skill";
import About from "./Profile/About";
import Education from "./Profile/Education";
import ProfessionalExperience from "./Profile/ProfessionalExperience";

function ProfileDetails() {
  // api calling

  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [education, setEducation] = useState([]);
  const [user_experiences, setExperience] = useState(null);
  
  const [user_certifications, setCertification] = useState(null);
  const [user_projects, setProjects] = useState(null);
  const [userAbout, setUserAbout] = useState(null);
  const [profileImage, setProfileImage] = useState(
    "data:image/jpeg;base64,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"
  );

  const profileFetch = async () => {
    try {
      const response = await axios.get(
        `https://127.0.0.1:8000/api/get_profile_by_id/${id}`
        // calling the api to get the profile details
      );
      if (response.status === 200) {
        setProfile(response.data.data);
        let userAvatar = response.data.data.user.image;
        userAvatar = userAvatar.slice(13, userAvatar.length);
        setProfileImage(userAvatar);
        setEducation(response.data.data.user_education);
        setExperience(response.data.data.user_work);
        
        setLoading(false);
      } else {
        setError("Error fetching data");
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    profileFetch();
  }, [id]);
  if (loading) {
    return (
      <>
        <div className="justify-center flex items-center min-h-screen">
          <Loader></Loader>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error fetching data {error}</div>;
  }
  return (
    <div class="bg-gray-100 p-4">
      <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
        <div class="text-white flex rounded-t-lg bg-gray-800 sm:px-2 w-full">
          <div class="h-40 w-40 sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src={profileImage} />
          </div>

          <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              {profile.user.first_name} {profile.user.last_name}
            </p>
            <p class="text-heading">Software Engineer</p>
          </div>
        </div>

        <div class="p-5">
          <div class="flex flex-col sm:flex-row sm:mt-10">
            <div class="flex flex-col sm:w-1/3">
              <div class="py-3 sm:order-none order-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  My Contact
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a class="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                    {/* to be changed to linkedin */}
                    <div class="ml-2 truncate">{profile.user.email}</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        class="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                    <div> {profile.user.username}</div>
                  </div>
                </div>
              </div>
              {/* the skills section */}
              <Skill></Skill>
              {/* education well maintained - timing 1 26 am */}
             <Education education={education}></Education>
            </div>

             <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              {/* user about */}
              <About></About>

              {/* professional experience */}
              <ProfessionalExperience userExperiences={user_experiences}></ProfessionalExperience>

              {/* projects */}
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  {user_projects ? (
                    user_projects.map((project, index) => (
                      <div class="flex flex-col">
                        <p class="text-lg font-semibold text-gray-700">
                          Used Books mobile app
                        </p>
                        <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                          A platform to sell as well as to buy used books only
                          for PCCoE College due to this reuse of books will be
                          there beneficial for environment also indirectly helps
                          increase communication between juniors and seniors.
                        </p>
                      </div>
                    ))
                  ) : (
                    <p class="text-sm font-medium">
                      Hey Aditya welcome to the jobedin, update your projects !
                      Recruiters nowdays get attracted by knowing you more
                    </p>
                  )}
                </div>
              </div>
              {/* certification */}
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Certifications
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  {user_certifications ? (
                    user_certifications.map((certificate, index) => (
                      <div class="flex flex-col">
                        <p class="text-lg font-semibold text-gray-700">
                          Used Books mobile app
                        </p>
                        <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                          A platform to sell as well as to buy used books only
                          for PCCoE College due to this reuse of books will be
                          there beneficial for environment also indirectly helps
                          increase communication between juniors and seniors.
                        </p>
                      </div>
                    ))
                  ) : (
                    <p class="text-sm font-medium">
                      Hey Aditya welcome to the jobedin, update your
                      certificates ! Recruiters nowdays get attracted by knowing
                      you more
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Mainprofile() {
  return (
    <>
      <Navbar></Navbar>
      <ProfileDetails></ProfileDetails>
    </>
  );
}
export default Mainprofile;
