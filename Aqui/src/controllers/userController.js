// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const { email, password } = req.body;

//   const hash = await bcrypt.hash(password, 10);

//   const user = await User.create({ email, password: hash });
//   res.status(201).json(user);
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

//   const ok = await bcrypt.compare(password, user.password);
//   if (!ok) return res.status(401).json({ error: "Senha inválida" });

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//   res.json({ token });
// };




// Teste04

// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // CORREÇÃO: Passamos a senha "crua". O Model (User.js) vai fazer o hash.
//     const user = await User.create({ email, password });
    
//     // Opcional: Não retornar a senha hashada
//     user.password = undefined; 
    
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(400).json({ error: "Erro ao registrar usuário: " + err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

//     // Compara a senha enviada com a senha hashada do banco
//     const ok = await bcrypt.compare(password, user.password);
    
//     if (!ok) return res.status(401).json({ error: "Senha inválida" });

//     // Gera o Token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



// Teste04.2



// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // --- CORREÇÃO AQUI ---
//     // Passamos a senha "crua" (ex: "123"). 
//     // O Model User.js tem um "pre-save" que vai fazer o hash automaticamente.
//     // Se fizermos hash aqui também, a senha será criptografada duas vezes!
//     const user = await User.create({ email, password });
    
//     // Remove a senha do retorno para segurança
//     user.password = undefined; 
    
//     res.status(201).json(user);
//   } catch (err) {
//     // Se der erro (ex: email duplicado), retorna 400
//     res.status(400).json({ error: "Erro ao registrar: " + err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

//     // Compara a senha enviada ("123") com o hash salvo no banco
//     const ok = await bcrypt.compare(password, user.password);
    
//     if (!ok) return res.status(401).json({ error: "Senha inválida" });

//     // Gera o Token JWT
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// Teste04.3

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // CORREÇÃO: Enviamos a senha pura. O Model (User.js) fará o hash.
    const user = await User.create({ email, password });
    
    user.password = undefined; // Segurança
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Erro ao registrar: " + err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

    // Compara senha enviada com o hash do banco
    const ok = await bcrypt.compare(password, user.password);
    
    if (!ok) return res.status(401).json({ error: "Senha inválida" });

    // Gera o Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};