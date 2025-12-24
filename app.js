const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/indexRouter.js');
const PORT = process.env.PORT || 3000;


app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Listening on ${PORT}`);
});