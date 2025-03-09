import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Auth Header:', authHeader); // ✅ Debugging line

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1]; // ✅ Extract token after "Bearer"
  console.log('Extracted Token:', token); // ✅ Debugging line

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded); // ✅ Debugging line
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT Error:', err.message); // ✅ Debugging line
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

export default authMiddleware;
