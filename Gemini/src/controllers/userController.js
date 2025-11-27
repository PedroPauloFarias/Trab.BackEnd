const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Verifica se já existe
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    // Cria o usuário (o Model User.js cuida do hash da senha agora)
    const user = await User.create({ email, password });
    
    // Segurança: não retorna a senha
    user.password = undefined; 
    
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

    // Compara a senha
    const ok = await bcrypt.compare(password, user.password);
    
    if (!ok) return res.status(401).json({ error: "Senha inválida" });

    // Gera token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token });
  } catch (err) {
    next(err);
  }
};