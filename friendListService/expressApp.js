
var express = require('express'),
    friendData = require('./friendData'),
    path = require('path'),
    bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

app.use(express.static(path.join(__dirname+"/../..","public")));
console.log((path.join(__dirname+"/../..","public")));


//Get all book list
app.get('/friend/:id?', function(req, res) {

    friendData.getfriendDetails(function (errr, result) {

        if(!req.param('id'))
        {
            res.send(200,result);
        }
        else
        {
            var id = req.param('id');
            for (var obj in result) {
                if(result[obj]._id == id)
                    res.send(200, result[obj]);
            }
        }


    });

});

//save new book
app.post('/friend', function (req, res) {
    friendData.addFriend(req.body, function (err, result) {
        if(err) {
            console.log('err: ',err);
            res.send(400, err);
        }
        else
            res.send(200, result)
    })
});

//update user by id
app.put('/friend/:id', function (req, res) {
    friendData.updateFriend(req.param('id'), req.body, function (err, result) {
        if(err) {
            console.log('err: ',err);
            res.send(400, "Entered wrong ID");
        }
        else
            res.send(200, result)
    })

});


// user record deleted by ID
app.delete('/friend/:id', function (req, res) {
    friendData.deleteFriendRecord(req.param('id'), function (err, result) {
        if(err) {
            console.log('err: ',err);
            res.send(400, " wrong ID Entered");
        }
        else
            res.send(200, result )
    })
});

app.listen(3000);