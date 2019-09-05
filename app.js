const express = require( 'express' );
const https   = require( 'https'   );

const app = express();

keepAlive();

//function keepAlive () {
//    clearInterval();
//    setInterval( () => {
//        //"https://nodejs-proj-002-our-library.herokuapp.com"
//        try {
//            https.get( 
//            'https://nodejs-proj-002-our-library.herokuapp.com', 
//                res => {
//                 console.log( 'nodejs-proj-002' );
//             });
//        } catch ( err ) {
//            console.log( err );
//        };
//
//        try {
//            https.get(
//                "https://nodejs-proj-004-library-mvc.herokuapp.com/admin/restore",
//                resp => {
//                 console.log( 'nodejs-proj-004' );
//                });
//        } catch ( err ) {
//            console.log( err );
//        };
//
//        keepAlive();
//    }, 10 * 1000 );
//}

app.use( '/', ( req, res, next ) => {
    res.write( 'It is working' );
    res.end();
}  );


app.listen( process.env.PORT || 5000 );
