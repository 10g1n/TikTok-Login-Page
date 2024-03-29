import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/verify', (req, res) => {
    console.log(req.body);
    res.render('verify.ejs');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});