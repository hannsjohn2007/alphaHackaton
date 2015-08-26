var express = require('express');
var router = express.Router();

var Site = require('../models/site');

router.use(function (req, res, next) {
    console.log("Received request from the client.");
    next();
});

router.route('/points')

        .post(function (req, res) {
            var site = new Site();

            site.save(function (err) {
                if (err)
                    res.send(err);

                res.send('Site created!');
            });
        })

        .get(function (req, res) {
            Site.find({}, function (err, sites) {
                if (err)
                    return handleError(err);
                res.json(sites);
            });
        });

router.route('/points/:point_id')

        .get(function (req, res) {
            Site.find({'_id': req.params.point_id}, function (err, sites) {
                if (err)
                    res.send(err);
                res.json(sites);
            });
        })

        .put(function (req, res) {
            Site.find({'_id': req.params.point_id}, function (err, sites) {
                if (err)
                    res.send(err);
                
                sites._id = req.params.point_id;
                
                sites.save(function(err) {
                    if (err)
                        res.send(err);
                    res.send('Site Updated');
                });
            });
        });

module.exports = router;
