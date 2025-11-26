const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Token necessário" });

  try {
    const valid = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = valid;
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
};
