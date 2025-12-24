const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const messages = [
    {
        text: "Hi there!",
        user: "Elizabeth",
        added: new Date(),
    },
]

app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { messages });
});

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Listening on ${PORT}`);
});