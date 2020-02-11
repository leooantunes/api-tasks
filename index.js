const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const taskController = require('./src/controllers/taskController');

// Iniciando a aplicação 
const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));
app.use(cors());

taskController(app);

app.listen(process.env.PORT || 3000);