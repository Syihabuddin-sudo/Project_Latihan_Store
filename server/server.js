const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;
require('dotenv').config()
const auth = require('./router/auth_route')
const db_connect = require('./database/db_connect');
const produk_route = require('./router/produk_route');

app.use(express.json());
app.use(cors())
app.use('/', auth, produk_route)

//function connect db & server
const start_server = async ()=>{
    try {
        await db_connect(process.env.MONGO_URL)
        app.listen(PORT, ()=>{
            console.log(`apps running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start_server()

