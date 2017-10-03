var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res) {
    console.log('map router hit');
    var mapPath = path.join(__dirname, '../../public/views/map.html');
    res.sendFile(mapPath);
});

module.exports = router;