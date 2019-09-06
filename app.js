const express = require( 'express' );
const https   = require( 'https'   );

const app = express();

app.use( '/', ( req, res, next ) => {
    keepAlive();
    res.write( 'It is working' );
    res.end();
}  );

function keepAlive () {
    clearTimeout();
    setTimeout( () => {
        try {
            https.get( 
            'https://keep-alive-mirchev.herokuapp.com', 
                res => {
                 console.log( 'proj-keep-alive' );
             });
        } catch ( err ) {
            console.log( err );
        };

        try {
            https.get( 
            'https://nodejs-proj-001-our-library.herokuapp.com/', 
                res => {
                 console.log( 'nodejs-proj-001' );
             });
        } catch ( err ) {
            console.log( err );
        };

        try {
            https.get( 
            'https://nodejs-proj-002-our-library.herokuapp.com', 
                res => {
                 console.log( 'nodejs-proj-002' );
             });
        } catch ( err ) {
            console.log( err );
        };

        try {
            https.get(
                "https://nodejs-proj-004-library-mvc.herokuapp.com/admin/restore",
                resp => {
                 console.log( 'nodejs-proj-004' );
                });
        } catch ( err ) {
            console.log( err );
        };

    }, 20 * 60 * 1000 );
}


app.listen( process.env.PORT || 5000 );
