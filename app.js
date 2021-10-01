const express = require('express')
const app = express();

const port = 3000;
app.get('/',(req,res) => {
   res.send('hello Im in home page')
})

app.get('/about',(req,res) => {
    res.write("<h1>hello from about page.</h1>")
    res.write('<h2>I am h2</h2>')
    res.send()
})
app.get('/contact',(req,res) => {
    res.status(200).json({
        id: 2,
        name: 'santosh',
        contact: '09808087',
    })
})


app.listen(port,() => {
    console.log(`listening on port ${port}`)
})