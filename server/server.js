const express = require('express');
const routes = require('./routes');
const db = require('./config/db.config');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Remove the {force:true} here to prevent dropping the tables
db.sync({force:true}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
