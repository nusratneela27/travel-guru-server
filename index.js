const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const travel = require('./data/travel.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Travel is running')
});

app.get('/travel', (req, res) => {
    res.send(travel)
})

app.get('/travel/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedTravel = travel.find(n => n.id === id);
    res.send(selectedTravel);
})

app.listen(port, () => {
    console.log(`Travel is running on port: ${port}`);
})