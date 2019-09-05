const express = require( 'express' );
const https   = require( 'https'   );

const app = express();

keepAlive();

function keepAlive () {
    setInterval( () => {
        //"https://nodejs-proj-002-our-library.herokuapp.com"
        try {
            https.get( 
            'https://nodejs-proj-002-our-library.herokuapp.com', 
                res => {
                 //console.log( 'nodejs-proj-002-our-library.herokuapp.com' );
             });
        } catch ( err ) {
            console.log( err );
        };

        try {
            https.get(
                "https://nodejs-proj-004-library-mvc.herokuapp.com/admin/restore",
                resp => {
                 //console.log( 'nodejs-proj-004-library-mvc.herokuapp.com/admin/restore' );
                });
        } catch ( err ) {
            console.log( err );
        };
    }, 15 * 60 * 1000 );
}

app.listen( process.env.PORT || 5000 );
