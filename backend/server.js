import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());  // ✅ Middleware must be before routes

// ✅ Log when routes are registered
console.log('Registering routes...');
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
console.log('Routes registered successfully.');

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
