const express = require('express');
const cors = require('cors');
const route = require('./src/routes/characters.routes');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/characters', route);

app.listen(port, () => console.log(`Server running on http://localhost:${port}/characters`));
