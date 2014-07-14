var mongoose = require('mongoose'),
    async = require('async'),
    util= require('./util');


//Define local host
var URIFriendDBString = 'mongodb://localhost/friend';

//Connection created
var friendDBConn = mongoose.createConnection(URIFriendDBString);

friendDBConn.on('error',function(err){
    console.log('err', err);
});


friendDBConn.once('open', function () {
    console.log('Database connection established!');
});


//Defined Schema of personSchema

var friendSchema = new mongoose.Schema({
    name:{type: String, min:5, max:30},
    age:{type:Number},
    emailID: {type:String }
} , { versionKey: false });

//Defined user modal
var friendModel= friendDBConn.model('friends', friendSchema);


var getfriendDetails = function (callback) {

    util.getDetail(friendModel, function (err, res) {

//        console.log(err, res);
        callback(err, res);
    });
}
var addFriend = function (friendObj, callback) {

    util.addDataToDB( friendObj, friendModel, function (err, res) {
        if(err)
        {
            callback(err, null);
        }
        else
            callback(null, 'successfully saved');
    });
}

//update user
var updateFriend = function (id, friendObj, callback) {

    util.update(id,  friendObj,friendModel, function (err, res) {
        if(err)
            callback(err, null);
        else
            callback(null, res);
    });
};

var deleteFriendRecord = function (id, callback) {
    util.deleteRecord(id, friendModel, function (err, res) {
        if(err)
            callback(err, null);
        else
            callback(null, res);
    })
};
module.exports.getfriendDetails = getfriendDetails;
module.exports.addFriend = addFriend;
module.exports.updateFriend = updateFriend;
module.exports.deleteFriendRecord = deleteFriendRecord;