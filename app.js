const express = require('express')
const app = express();

const port = 3000;
app.get('/',(req,res) => {
   res.send('hello Im in home page')
})

app.get('/about',(req,res) => {
    res.status(200).send("hello from about page.")
})
app.get('/contact',(req,res) => {
    res.status(200).send("hello from contact page.")
})


app.listen(port,() => {
    console.log(`listening on port ${port}`)
})