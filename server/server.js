const express = require('express');

let app = express();

app.get('/',(req,res)=>{
  // res.send('Hello World!')

  res.status(404).send({
    error: 'Page not found',
    name: 'To do app'
  })
});

//GET /users
app.get('/users',(req,res)=>{
  res.send([
    {name:'alvin',age:15},
    {name:'dochie',age:18},
    {name:'stephanie',age:12},
  ])
})

app.listen(3000);

module.exports = app;
