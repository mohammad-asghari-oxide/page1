const express = require('express');
const axios = require('axios');

const app = express();

app.get('/data', async (req, res) => {
  const url = 'http://google.com/'; // Replace with the actual URL
  const response = await axios.get(url);
  res.send(response.data);
});

app.listen(3000, () => console.log('Server started on port 3000'));
