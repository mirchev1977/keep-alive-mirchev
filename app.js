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
                 console.log( 'nodejs-proj-002-our-library.herokuapp.com' );
             });
        } catch ( err ) {
            console.log( err );
        }
    }, 5000 );
}

app.listen( process.env.PORT || 5000 );
