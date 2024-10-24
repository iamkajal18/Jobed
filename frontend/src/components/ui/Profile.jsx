
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";


// User Basic Info Card
const UserProfileCard = () => {
  const { id }=useParams()
  const [user, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`https://jobedinwebsite-production.up.railway.app/api/profile/${id}`);
      setUserDetails(response.data.data);
    } catch (err) {
      setError('Failed to fetch user details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) return <div>Your Profile is...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card variant="outlined">
      <CardContent>
      <Typography color="text.secondary">
        <img src={user.image} alt="Profile" />
      </Typography>
        <Typography variant="h5" component="div">
          {user.first_name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography color="text.secondary">{user.mobile_number}</Typography>
        <Typography color="text.secondary">{user.address}</Typography>
      </CardContent>
    </Card>
  );
};

// Main Form Component
const ProfileUpdate = () => {
  const [openProject, setOpenProject] = useState(false);
  const [openCertification, setOpenCertification] = useState(false);
  const [openWorkExperience, setOpenWorkExperience] = useState(false);

  const [project, setProject] = useState({
    project_title: "",
    project_description: "",
    repo_link: "",
    website_link: "",
    skills_used: "",
  });

  const [certification, setCertification] = useState({
    title: "",
    description: "",
    start_month: "",
    end_month: "",
    link: "",
    skills_used: "",
  });

  const [workExperience, setWorkExperience] = useState({
    companyName: "",
    work_type: "",
    company_website: "",
    location: "",
    start_date: "",
    end_date: "",
    working: "",
  });

  const skills = [
    'Communication',
    'Teamwork',
    'Leadership',
    'Problem Solving',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Creativity',
    'Emotional Intelligence',
    'Conflict Resolution',
    'Decision Making',
    'Collaboration',
    'Negotiation',
    'Stress Management',
    'Attention to Detail',
    'Active Listening',
    'Public Speaking',
    'Interpersonal Skills',
    'Organizational Skills',
    'Work Ethic',
    'Self-Motivation',
    'Empathy',
    'Flexibility',
    'Coaching & Mentoring'
  ];

  const workTypes = ['Internship', 'Part-Time', 'Full-Time'];
  const locations = ['Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai', 'Delhi', 'Gurugram', 'Noida', 'Kolkata', 'Ahmedabad'];
  const workingOptions = ['Working Currently', 'No'];

  const handleOpenProject = () => setOpenProject(true);
  const handleCloseProject = () => setOpenProject(false);

  const handleOpenCertification = () => setOpenCertification(true);
  const handleCloseCertification = () => setOpenCertification(false);

  const handleOpenWorkExperience = () => setOpenWorkExperience(true);
  const handleCloseWorkExperience = () => setOpenWorkExperience(false);

  const handleChangeProject = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleChangeCertification = (e) => {
    const { name, value } = e.target;
    setCertification({
      ...certification,
      [name]: value,
    });
  };

  const handleChangeWorkExperience = (e) => {
    const { name, value } = e.target;
    setWorkExperience({
      ...workExperience,
      [name]: value,
    });
  };

  const handleContinueProject = async () => {
    try {
      const response = await axios.post("/api/projects", project);
      console.log("Project updated:", response.data);
      handleCloseProject();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleContinueCertification = async () => {
    try {
      const response = await axios.post("/api/certifications", certification);
      console.log("Certification updated:", response.data);
      handleCloseCertification();
    } catch (error) {
      console.error("Error updating certification:", error);
    }
  };

  const handleContinueWorkExperience = async () => {
    try {
      const response = await axios.post("/api/work-experiences", workExperience);
      console.log("Work experience updated:", response.data);
      handleCloseWorkExperience();
    } catch (error) {
      console.error("Error updating work experience:", error);
    }
  };

  // Example user data, you can fetch this from your API
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    location: "New York",
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar with User Info */}
      <div style={{ width: "25%", padding: "20px" }}>
        <UserProfileCard user={user} />
        <Button variant="outlined" onClick={handleOpenProject} fullWidth style={{ marginTop: "20px" }}>
          Add Project
        </Button>
        <Button variant="outlined" onClick={handleOpenCertification} fullWidth style={{ marginTop: "10px" }}>
          Add Certification
        </Button>
        <Button variant="outlined" onClick={handleOpenWorkExperience} fullWidth style={{ marginTop: "10px" }}>
          Add Work Experience
        </Button>
        
      </div>

      {/* Main Content Area */}
      <div style={{ width: "75%", padding: "20px" }}>
        <Typography variant="h4">Update Profile Information</Typography>
      </div>

      {/* Project Dialog */}
      <Dialog open={openProject} onClose={handleCloseProject}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <TextField
            name="project_title"
            label="Project Title"
            fullWidth
            variant="outlined"
            margin="normal"
            value={project.project_title}
            onChange={handleChangeProject}
          />
          <TextField
            name="project_description"
            label="Project Description"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={project.project_description}
            onChange={handleChangeProject}
          />
          <TextField
            name="repo_link"
            label="Repository Link"
            fullWidth
            variant="outlined"
            margin="normal"
            value={project.repo_link}
            onChange={handleChangeProject}
          />
          <TextField
            name="website_link"
            label="Website Link"
            fullWidth
            variant="outlined"
            margin="normal"
            value={project.website_link}
            onChange={handleChangeProject}
          />
          <Select
            name="skills_used"
            label="Skills Used"
            fullWidth
            variant="outlined"
            margin="normal"
            value={project.skills_used}
            onChange={handleChangeProject}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {skills.map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContinueProject} color="primary">
            Continue
          </Button>
          <Button onClick={handleCloseProject} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Certification Dialog */}
      <Dialog open={openCertification} onClose={handleCloseCertification}>
        <DialogTitle>Add Certification</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            label="Certification Title"
            fullWidth
            variant="outlined"
            margin="normal"
            value={certification.title}
            onChange={handleChangeCertification}
          />
          <TextField
            name="description"
            label="Description"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={certification.description}
            onChange={handleChangeCertification}
          />
          <TextField
            name="start_month"
            label="Start Month"
            type="month"
            fullWidth
            variant="outlined"
            margin="normal"
            value={certification.start_month}
            onChange={handleChangeCertification}
          />
          <TextField
            name="end_month"
            label="End Month"
            type="month"
            fullWidth
            variant="outlined"
            margin="normal"
            value={certification.end_month}
            onChange={handleChangeCertification}
          />
          <TextField
            name="link"
            label="Certification Link"
            fullWidth
            variant="outlined"
            margin="normal"
            value={certification.link}
            onChange={handleChangeCertification}
          />
          <TextField
            name="skills_used"
            label="Skills Used"
            fullWidth
            variant="outlined"
            margin="normal"
            value={certification.skills_used}
            onChange={handleChangeCertification}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContinueCertification} color="primary">
            Continue
          </Button>
          <Button onClick={handleCloseCertification} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Work Experience Dialog */}
      <Dialog open={openWorkExperience} onClose={handleCloseWorkExperience}>
        <DialogTitle>Add Work Experience</DialogTitle>
        <DialogContent>
          <TextField
            name="companyName"
            label="Company Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.companyName}
            onChange={handleChangeWorkExperience}
          />
          <Select
            name="work_type"
            label="Work Type"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.work_type}
            onChange={handleChangeWorkExperience}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {workTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          <TextField
            name="company_website"
            label="Company Website"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.company_website}
            onChange={handleChangeWorkExperience}
          />
          <Select
            name="location"
            label="Location"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.location}
            onChange={handleChangeWorkExperience}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
          <TextField
            name="start_date"
            label="Start Date"
            type="date"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.start_date}
            onChange={handleChangeWorkExperience}
          />
          <TextField
            name="end_date"
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.end_date}
            onChange={handleChangeWorkExperience}
          />
          <Select
            name="working"
            label="Working"
            fullWidth
            variant="outlined"
            margin="normal"
            value={workExperience.working}
            onChange={handleChangeWorkExperience}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {workingOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContinueWorkExperience} color="primary">
            Continue
          </Button>
          <Button onClick={handleCloseWorkExperience} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileUpdate;
