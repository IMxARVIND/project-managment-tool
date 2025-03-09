import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../api/projectApi';

const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProject({ name, description, deadline, status });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" type="text" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea className="form-control my-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input className="form-control my-2" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
        <input className="form-control my-2" type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
        <button className="btn btn-success" type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
