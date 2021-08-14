require('dotenv').config()
const express = require('express'); 
const cors = require("cors");
const { dbConnetion } = require('./app/database/connect.db')

const app = express();
app.use(cors());
app.use(express.json());
dbConnetion(); 



//routes
const barsRouter = require('./app/routes/riojanBars.routes'); 

app.use('/api/riojanbars', barsRouter) 

// app.use('/', (req, res) => {
//     res.send('inicio')
// } );

app.get('/api', (req, res) =>{
    res.json({
        ok: true, 
        msg: 'ruta de places'
    });
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server ejecutandose');
})


