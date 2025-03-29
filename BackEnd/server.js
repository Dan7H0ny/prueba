const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Config
const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb+srv://loqendo759:<db_password>@cluster0.hg3sulk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // o usa MongoDB Atlas

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Modelo de usuario
const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String
}));

// Ruta para guardar los datos
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(200).json({ message: 'Datos guardados' });
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
