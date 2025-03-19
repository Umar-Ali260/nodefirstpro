const express = require("express")
const app = express()

app.listen(3000, ()=>{
console.log('Server run successfully on port 3000')
})

app.get('/', (req, res) => {
    res.send('<h1>Welcom to the home page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
}) 

app.get('/gallery', (req, res) => {
    res.send('<h1>Gallary Page<h1>')
})

//Nested Route
app.get('/about/user', (req, res) => {
    res.send('<h1>User Page</h1>')
}) 


//query parameters
app.get('/about/:id', (req, res) =>{
    res.send(req.params)
})

app.get('/search', (req, res) =>{
    res.send(req.query)
})