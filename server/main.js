import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbContext from "./db/dbconfig"
const server = express()

DbContext.connect()

var port = process.env.PORT || 3000
server.use(express.static(__dirname + '/../client/dist'))


var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

// Auth
import UserController from './controllers/UserController'
import Session from "./middleware/session"
server.use(new Session().express)
server.use('/account', new UserController().router)

// Other Controllers
import CalendarBlocksController from './controllers/CalendarBlocksController'
import StickyNotesController from './controllers/StickyNotesController'

server.use('/api/calendarBlocks', new CalendarBlocksController().router)
server.use('/api/stickyNotes', new StickyNotesController().router)






//NOTE Default error handler, catches all routes with an error attached
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } });
});

//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})