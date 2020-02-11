const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://leooantunes:tasks123@cluster0-tlshy.mongodb.net/apitasks?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;