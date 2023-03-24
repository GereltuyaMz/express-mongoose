import jwt from 'jsonwebtoken';

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token is required!" })
  }

  try {
    const decoded = jwt.verify(token, config.JWT_TOKEN);
    req.user = decoded;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "User not found" })
  }

  return next();
}

export default verifyToken;