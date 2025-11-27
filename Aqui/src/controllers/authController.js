// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// exports.login = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

//   const valid = await bcrypt.compare(req.body.password, user.password);

//   if (!valid) return res.status(401).json({ error: "Senha inválida" });

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//   res.json({ token });
// };

// //Teste04

// exports.register = async (req, res) => {
//   const { email, password } = req.body;

//   const exists = await User.findOne({ email });
//   if (exists) return res.status(400).json({ error: "Usuário já existe" });

//   const hashed = await bcrypt.hash(password, 10);

//   const user = await User.create({ email, password: hashed });

//   res.status(201).json({ message: "Usuário criado", id: user._id });
// };




// Teste04.2

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashed,
    });

    return res.status(201).json({ message: "Usuário criado", user });
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(400).json({ error: "Erro ao registrar usuário" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  } catch (err) {
    console.error("Erro ao logar:", err.message);
    return res.status(400).json({ error: "Erro no login" });
  }
};
