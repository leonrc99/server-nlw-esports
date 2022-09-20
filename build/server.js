import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' }
    ]);
});
app.post('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' }
    ]);
});
app.listen(3535, () => {
    console.log(`
  Rodando servidor em: http://localhost:3535
  
  Bem-vindo à API de E-Sports Match!
  `);
});
