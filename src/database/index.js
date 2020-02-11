const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/taskapi', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;