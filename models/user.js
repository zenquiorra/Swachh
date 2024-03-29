var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type:String},
    email: {type:String,unique:true},
    password: {type:String}
});

var userModel = mongoose.model('user',userSchema);
module.exports = userModel;