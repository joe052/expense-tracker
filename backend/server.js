const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.use(express.static('backend'));
app.listen(port,()=>{
  console.log(`App running at ${port} welcome to the dark side!!`);
});

app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));

app.post('/login',(req,res)=>{
  console.log(req.body);
});