import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Needs 'cookie-parser' installed

  if (!token) return res.status(401).json({ success: false, message: "Unauthorized - No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the userId to the request so the next function can use it
    req.userId = decoded.userID; 
    next(); // Pass control to the next function
  } catch (error) {
    console.log("Error in verifyToken ", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};