const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const path = require('path');

//Conectando base de dados
mongoose.connect('mongodb+srv://pedromeneghel:sRazQAOHLlJhoqyo@cluster0-as1jw.mongodb.net/week9?retryWrites=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);
app.listen(3333);