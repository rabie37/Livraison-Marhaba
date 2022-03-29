/* -------------------------------------------------------------------------- */
/*                               Index || Server                              */
/* -------------------------------------------------------------------------- */

//* Require Impotant Model
const express = require('express')
const bodyParser = require('body-parser') //? The will let us get data the data form post
require('./models/index');

//* Create our app
const app = express()
const port = 5000

//* the will let us get data the data form post

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//* Coneection to database :
const db = require('./config/database')

db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//* Require Routes
const authRoutes = require('./routes/auth')

//* Register Our Routes
app.use('/api', authRoutes)

//* Routes test
app.get('/test', (rep, res) => res.send('test'))

//! Start server : 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// console
function ConsolLog(rep, res, next) {
    console.log(' [' + rep['method'] + '] http://localhost:' + port + rep['url'])
    next()
}

app.use(ConsolLog);
// console end