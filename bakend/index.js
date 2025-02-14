const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require("cors");
const contactRoutes = require('./Routes/contactRoutes');
require("dotenv").config();

mongoose.connect('mongodb://localhost:27017/messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));

app.use(express.json());
app.use(cors());
app.use('/api', contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});