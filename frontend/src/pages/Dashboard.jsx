import { useEffect, useState } from 'react';
import { getProjects } from '../api/projectApi';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <Link to="/add-project" className="btn btn-success mb-3">Add New Project</Link>
      
      {projects.length === 0 ? (
        <p>No projects available. Add a new project to get started.</p> // ✅ Fix: Show message when no projects exist
      ) : (
        <ul className="list-group">
          {projects.map((project) => (
            <li key={project._id} className="list-group-item d-flex justify-content-between align-items-center">
              {project.name} - {project.status}
              <div>
                <Link to={`/edit-project/${project._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default Dashboard;
