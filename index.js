require('dotenv').config() //require is used to import the package into the code
const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('keerti.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login at chai aur code</h1>')
})
app.get('/Register',(req,res)=>{
  res.send('<h1> Please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("Chai aur Code")
}
)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})