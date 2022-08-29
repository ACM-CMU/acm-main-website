const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// removed https
// if (process.env.NODE_ENV == 'production') {
//     app.use((req, res, next) => {
//         if (req.header('x-forwarded-proto') !== 'https') {
//             res.redirect(`https://${req.header('host')}${req.url}`);
//         } else {
//             next();
//         }
//     });
// }

/**
 *********************************
 *        HOMEPAGE ROUTES        *
 *********************************
 */


app.use('/', express.static(path.join(__dirname, 'public/homepage')));

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'schemas/homepage/welcome.json'));
    console.log("GET to /welcome from " + req.hostname)
});

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, 'schemas/homepage/aboutus.json'))
    console.log("GET to /aboutus from " + req.hostname)
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'schemas/homepage/events.json'))
    console.log("GET to /events from " + req.hostname)
});

app.get('/sponsors', (req, res) => {
    res.sendFile(path.join(__dirname, 'schemas/homepage/sponsors.json'))
    console.log("GET to /sponsors from " + req.hostname)
});

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
