const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('backend'));
app.listen(port,()=>{
  console.log(`App running at ${port} welcome to the dark side!!`);
});