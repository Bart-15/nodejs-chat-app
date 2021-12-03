const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();




const PORT = process.env.PORT || 5000;
const authRoute = require('./routes/auth')

app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(authRoute)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})