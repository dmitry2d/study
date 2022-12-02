import express from 'express';

const PORT = 5000;

const app = express ();

app.use (express.json());


// app.get ('/', (req, res) => {
//     console.log (req.query);
//     res.status(200).json('Сервер работает');
// });

app.post ('/', (req, res) => {
    console.log (req.body);
    res.status(200).json('Сервер работает: ' + req.body.test);
});

app.listen (PORT, () => {
    console.log ('SERVER STARTED AT PORT ' + PORT);
});
