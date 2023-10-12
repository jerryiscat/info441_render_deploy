import express from "express";
const app = express();

const port  = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})