import { Link } from 'react-router-dom';

const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <p className="card-text"><strong>Status:</strong> {project.status}</p>
        <p className="card-text"><strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}</p>
        <div className="d-flex">
          <Link to={`/edit-project/${project._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
          <button onClick={() => onDelete(project._id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
