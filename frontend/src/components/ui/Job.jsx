import React from "react";
import Navbar from "./Navbar";
import JobList from "./JobList"; // Import the JobList component

function Job() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <JobList /> {/* Include JobList component */}
        <JobList />
        <JobList />
      </main>
    </div>
  );
}

export default Job;
