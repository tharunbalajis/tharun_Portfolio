import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (optional - will use in-memory storage if not connected)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// MongoDB Schemas
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [String],
  github: String,
  live: String,
  image: String
});

// In-memory storage (fallback if MongoDB not available)
let contacts = [];
let projects = [
  {
    title: 'CivicFlow',
    description: 'AI Civic Intelligence Platform for government services',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'MongoDB'],
    github: 'https://github.com/tharun/CivicFlow',
    live: 'https://civicflow.demo',
    image: 'civicflow'
  },
  {
    title: 'Aadhaar Face Authentication',
    description: 'Advanced face recognition system for Aadhaar verification',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
    github: 'https://github.com/tharun/aadhaar-auth',
    live: null,
    image: 'aadhaar'
  },
  {
    title: 'RUL Prediction (ISRO)',
    description: 'Machine Learning model for predicting Remaining Useful Life',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
    github: 'https://github.com/tharun/rul-prediction',
    live: null,
    image: 'isro'
  },
  {
    title: 'EduOS SaaS',
    description: 'Full-stack educational platform with AI-powered features',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow'],
    github: 'https://github.com/tharun/eduos',
    live: 'https://eduos.app',
    image: 'eduos'
  }
];

// Try to connect to MongoDB, otherwise use in-memory storage
let Contact, Project;
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    Contact = mongoose.model('Contact', contactSchema);
    Project = mongoose.model('Project', projectSchema);
  })
  .catch((err) => {
    console.log('MongoDB not available, using in-memory storage');
    Contact = null;
    Project = null;
  });

// Routes

// POST /api/contact - Store contact message
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (Contact) {
      const contact = new Contact({ name, email, message });
      await contact.save();
    } else {
      contacts.push({ name, email, message, createdAt: new Date() });
    }
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// GET /api/projects - Fetch projects
app.get('/api/projects', async (req, res) => {
  try {
    if (Project) {
      const projects = await Project.find();
      if (projects.length > 0) {
        return res.json(projects);
      }
    }
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// GET /api/contacts - Fetch all contacts (for admin)
app.get('/api/contacts', async (req, res) => {
  try {
    if (Contact) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json(contacts);
    }
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
