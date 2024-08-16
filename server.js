// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilita CORS
app.use(cors({
  origin: '*', // Permite todas as origens. Ajuste conforme necessário.
}));

// Serve arquivos estáticos da pasta 'src/public'
app.use(express.static(path.join(__dirname, 'src/public')));

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
