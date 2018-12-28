const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/kartik',{useNewUrlParser:true});

module.exports = {mongoose };