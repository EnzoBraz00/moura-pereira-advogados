const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get('/', (req, res) => res.send('API funcionando!'));

app.listen(3001, () => console.log('Servidor rodando em http://localhost:3001'));