
var express = require('express'),
    friendData = require('./friendData'),
    path = require('path'),
    login = require('./login'),
    fs = require('fs'),
    bodyParser = require('body-parser');

var app = express();

var session = false;

app.use(bodyParser());

app.use(express.static(path.join(__dirname+"/..","public")));



app.post('/authUser', function (req, res) {

        login.getloginDetails( function (err, result) {

            if (err) {
//                console.log('err: ', err);
                res.send(400, err);
            }
            else {

                for (var obj in result) {
                    if (result[obj].email == req.body.email && result[obj].password == req.body.password) {
                        session = result[obj]._id;
                        res.send("success", session);

                    }
                }
                if(!session)
                res.send('success');

            }
        })
});

//###########################################  FRIENDLIST API  ##################################

//Get all friend list
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

//save new friend
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

//update friend by id
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


// friend record deleted by ID
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


//###########################################  USER API  ##################################


//Get all login list
app.get('/login/:id?', function(req, res) {

    login.getloginDetails(function (err, result) {

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

//save new login
app.post('/login', function (req, res) {

    console.log('>>>>>>>>>>>>>POST: body', req.body);

    login.addlogin(req.body, function (err, result) {


        if(err) {
            console.log('err: ',err);
            res.send(400, err);
        }
        else
            res.send(200, "succesfully resgistered")
    })
});

//update login by id
app.put('/login/:id', function (req, res) {
    login.updatelogin(req.param('id'), req.body, function (err, result) {
        if(err) {
            console.log('err: ',err);
            res.send(400, "Entered wrong ID");
        }
        else
            res.send(200, result)
    })

});

// login record deleted by ID
app.delete('/login/:id', function (req, res) {
    login.deleteloginRecord(req.param('id'), function (err, result) {
        if(err) {
            console.log('err: ',err);
            res.send(400, " wrong ID Entered");
        }
        else
            res.send(200, result )
    })
});


app.listen(3000);