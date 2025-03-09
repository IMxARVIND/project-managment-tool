import express from 'express';
import { getProjects, addProject, updateProject, deleteProject } from '../controllers/projectController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getProjects);
router.post('/add', authMiddleware, addProject);
router.put('/update/:id', authMiddleware, updateProject);
router.delete('/delete/:id', authMiddleware, deleteProject);

export default router;
