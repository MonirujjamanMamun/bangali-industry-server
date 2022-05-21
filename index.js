const express = require('express');
const cors = require('cors');
require.apply('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// midell ware 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hey Man")
});
app.listen(port, () => {
    console.log('testing port', port)
})