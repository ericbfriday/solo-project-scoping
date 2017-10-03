var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');
var port = process.env.PORT || 8080;
var index = require( './modules/routes/index.js');
var map = require( './modules/routes/map.js' );
var d3route = require('./modules/routes/d3.js');

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/map', map);
app.use( '/d3', d3route);

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up