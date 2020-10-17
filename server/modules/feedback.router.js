// Do I need this??? I don't know yet. Delete MMEEEEEEEEEE

const express = require( 'express' );
const router = express.Router();
const pool = require( './pool' );

router.get( '/', ( req, res )=>{ //server now talking to database
    console.log( '/GET hit' );
    const queryText = `SELECT * FROM "feedback";`; 
    pool.query( queryText )
        .then( ( results )=>{
        res.send( results.rows );
        }).catch( ( err )=>{
            console.log( err );
            res.sendStatus( 500 );
        })
})

module.exports = router;