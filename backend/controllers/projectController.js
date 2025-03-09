import Project from '../models/Project.js';

// ✅ Ensure `updateProject` is correctly exported
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, deadline, status } = req.body;

    console.log(`Updating project with ID: ${id}`);
    console.log('Received update data:', req.body);

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name, description, deadline, status },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Ensure `deleteProject` is correctly exported
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting project with ID: ${id}`);

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Ensure `addProject` is correctly exported
export const addProject = async (req, res) => {
  try {
    console.log('Received data:', req.body);

    const { name, description, deadline, status } = req.body;

    if (!name || !description || !deadline || !status) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProject = new Project({ name, description, deadline, status });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error saving project:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Ensure `getProjects` is correctly exported
export const getProjects = async (req, res) => {
  try {
    console.log('GET /projects request received');
    console.log('User from authMiddleware:', req.user);

    const projects = await Project.find();
    console.log('Projects found:', projects);

    res.json(projects.length > 0 ? projects : []);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
