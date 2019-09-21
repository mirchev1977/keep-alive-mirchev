const express = require( 'express' );
const https   = require( 'https'   );

const app = express();

app.use( '/', ( req, res, next ) => {

    keepAlive().then( msg => {
      try {
        callApps();
        res.write( 'Success: It is working' );
        res.end();
      } catch( err ) {
        res.write( 'Success: It is working' );
        res.end();
      };
      res.write( 'Success: It is working' );
      res.end();
    } ).catch( err => {
      try {
        callApps();
        res.write( 'Error: It is working' );
        res.end();
      } catch( err ) {
        res.write( 'Error: It is working' );
        res.end();
      };
      res.write( 'Success: It is working' );
      res.end();
    } );
}  );

function keepAlive () {
    clearTimeout();
    const promise = new Promise( ( resolve, reject ) => {
      setTimeout( () => {
          try {
              https.get( 
              'https://keep-alive-mirchev.herokuapp.com', 
                  res => {
                   console.log( 'proj-keep-alive' );
                    resolve( 'proj-keep-alive' );
               });
          } catch ( err ) {
              console.log( err );
              reject( err );
          }; 
      }, 20 * 60 * 1000 );
    } );
    return promise;
}

function callApps () {
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

  try {
      https.get(
          "https://nodejs-proj-005-cars.herokuapp.com/admin/restore",
          resp => {
           console.log( 'nodejs-proj-005' );
          });
  } catch ( err ) {
      console.log( err );
  };


}


app.listen( process.env.PORT || 5000 );
