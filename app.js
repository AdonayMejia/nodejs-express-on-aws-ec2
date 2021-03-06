const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Node Demo App</h1> <h4>Message: Success</h4> <p>Sistemas Distribuidos</p> <p>Universidad Don Bosco</p> <p>Prueba de Funcionamiento</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Node app is up and listening to port: ${port}`);
})
 
