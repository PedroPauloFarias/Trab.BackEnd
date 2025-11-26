const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid) return res.status(401).json({ error: "Senha inválida" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
};
