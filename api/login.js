var mongoose = require('mongoose'),
    util= require('./util');


//Define local host
var URIloginDBString = 'mongodb://localhost/login';

//Connection created
var loginDBConn = mongoose.createConnection(URIloginDBString);

loginDBConn.on('error',function(err){
    console.log('error occurred during database connection: ', err);
});


loginDBConn.once('open', function () {
    console.log('Login Database connection established!');
});


//Defined Schema of personSchema

var loginSchema = new mongoose.Schema({
    firstName:{type: String, min:5, max:30},
    lastName:{type: String, min:5, max:30},
    email: {type:String },
    password: {type:Number}
} , { versionKey: false });

//Defined user modal
var loginModel= loginDBConn.model('logins', loginSchema);


var getloginDetails = function (callback) {

    util.getDetail(loginModel, function (err, res) {

//        console.log(err, res);
        callback(err, res);
    });
}
var addlogin = function (loginObj, callback) {

    util.addDataToDB( loginObj, loginModel, function (err, res) {
        if(err)
        {
            callback(err, null);
        }
        else
            callback(null, 'successfully saved');
    });
}

//update user
var updatelogin = function (id, loginObj, callback) {

    util.update(id,  loginObj,loginModel, function (err, res) {
        if(err)
            callback(err, null);
        else
            callback(null, res);
    });
};

var deleteloginRecord = function (id, callback) {
    util.deleteRecord(id, loginModel, function (err, res) {
        if(err)
            callback(err, null);
        else
            callback(null, res);
    })
};
module.exports.getloginDetails = getloginDetails;
module.exports.addlogin = addlogin;
module.exports.updatelogin = updatelogin;
module.exports.deleteloginRecord = deleteloginRecord;