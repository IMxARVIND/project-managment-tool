import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  deadline: Date,
  status: String,
});

export default mongoose.model('Project', projectSchema);
