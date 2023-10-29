const express = require("express")
const serverless = require("serverless-http")
const app = express()

app.use(express.json())
// const port = 3000
app.get('/hello', (req,res) =>{
  console.log("request data", req.query.name)
    res.send(`Hello ${req.query.name} From Lamda`)
})
app.post('/add', (req,res) =>{
  let {num1, num2 }  = req.body
  let sum = num1 + num2
    res.send(`Sum is  ${sum}`)
})
// app.listen(port,(err)=>{
//      if(!err){console.log(`Server is running on ${port}`)}
//      else{throw err}
//  })

module.exports.handler = serverless(app);


