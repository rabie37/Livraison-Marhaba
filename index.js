/* -------------------------------------------------------------------------- */
/*                               Index || Server                              */
/* -------------------------------------------------------------------------- */

//* Require Impotant Model
const express = require('express')
const bodyParser = require('body-parser') //? The will let us get data the data form post
require('./models/index');
const AuthMiddleware = require('./middlewares/AuthMiddleware')
require('./models/index');
let chai = require('chai');


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
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const commandRoutes = require('./routes/command')

//* Register Our Routes
app.use('/api', authRoutes)
app.use('/api/user', AuthMiddleware.isLogin, AuthMiddleware.hasRole('admin'), userRoutes)

app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/command', commandRoutes);


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
// module.exports = server