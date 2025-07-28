const e = require('express');
const express=require('express');
const dotenv=require('dotenv').config();
const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.status(200).send('Hello World from node server!');
});
app.get('/data', (req, res) => {
  res.status(200).send({data:[1,2,3,4,5]});
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});