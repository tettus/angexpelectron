var Employee     = require('./schema/employee-schema');
var express = require('express');
var router = express.Router();              

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next(); // make sure we go to the next routes and don't stop here
});

 
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.get('/employees', function(req, res) {
    Employee.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
    });
});

/***
 * Search user with email id
 */
router.get('/employee/:employeeid', function(req, res) {
    
    User.findOne({"employeeid":req.params.email},function(err, user) {
            if (err)
                res.send(err);
          
            res.json(user);
    });
});

router.post('/employee', function(req, res) {
        // user.firstname = req.body.firstname;   
       console.log("Adding employee......"+JSON.stringify(req.body));
        // save the user and check for errors
       new Employee(req.body).save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
});

module.exports = router;