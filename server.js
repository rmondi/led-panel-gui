const express = require( "express" )
const cors = require( "cors" )
const dotenv = require( "dotenv" )
const { SerialPort } = require( "serialport" )

dotenv.config()

const PORT = parseInt( process.env.SERVER_PORT ) || 3001

const app = express()
app.use( express.json() )

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccesStatus: 200
}

app.use( cors( corsOptions ) )

const serial = new SerialPort( {
  path: process.env.ARDUINO_PATH,
  baudRate: parseInt( process.env.ARDUINO_BAUD_RATE )
} )

app.listen( PORT, () => {
  console.log( `Server is listening on ${ PORT }` )
} )

app.get( "/", ( req, res ) => {
  res.html( "OK" )
} )

app.get( "/clear", ( req, res ) => {
  
  let colors = []

  for ( let i = 0; i < 300; i++ ) colors.push(0)

  serial.write( Buffer.from( colors ), ( err ) => {
    if ( err ) return console.log( err.message )
  } )

  res.status( 200 ).send( "Données effacées avec succès !" )
} )

app.post( "/send", ( req, res ) => {
  
  let colors = []
  let rgb = []

  req.body.leds.forEach( led => {

    rgb = led.split( "," )
    
    colors = colors.concat( rgb )
  } );

  serial.write( Buffer.from( colors ), ( err ) => {
    if ( err ) return console.log( err.message )
  } )

  res.status( 200 ).send( "Données envoyées avec succès ! ")
} )