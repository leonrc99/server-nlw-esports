import express from 'express';

const app = express();

app.listen(3535, () => {
  console.log(`
  Rodando servidor em: http://localhost:3535
  
  Bem-vindo à API de E-Sports Match!
  `)
});