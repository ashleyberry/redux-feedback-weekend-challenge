const express = require( 'express' );
const router = express.Router();
const pool = require( './pool' );

// server now talking to database

// Removes feedback from database
// Request must include a parameter indicating what feedback if to update
router.delete('/:id',  ( req, res ) => {
    console.log( 'req.params:', req.params.id ); // id of the item to delete
    let id = req.params.id
    const queryString = `DELETE FROM "feedback" WHERE "id" = $1;`;
    console.log( 'Delete route called with id of:', id );
    pool.query( queryString, [ id ] )
    .then( ( response ) => {
      console.log( 'deleted feedback!', response );
      res.sendStatus( 200 ); 
    }).catch( ( err ) => {
      console.log( 'error deleting feedback', err );
      res.sendStatus( 500 );
    }) // end catch
  });

// allows us to receive all feedback from database's "feedback" table
router.get( '/', ( req, res )=>{ 
    console.log( '/GET hit' );
    const queryText = `SELECT * FROM "feedback" ORDER BY "time" DESC;`; 
    pool.query( queryText )
        .then( ( results )=>{
        res.send( results.rows );
        }).catch( ( err )=>{
            console.log( err );
            res.sendStatus( 500 );
        })
})

// allows us to post new feedback responses to database into "feedback" table
router.post( '/', ( req, res )=>{ 
    console.log( '/POST hit', req.body );
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ( $1, $2, $3, $4 );`
    pool.query( queryText, [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ] )
    .then( ( results )=> {
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( 'Error in Post router:', err );
        res.sendStatus( 500 )
    })
})

module.exports = router;