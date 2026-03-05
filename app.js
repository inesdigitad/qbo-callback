const express = require('express');
const https = require('https');
const app = express();

app.get('/callback', async (req, res) => {
  const { code, realmId, state } = req.query;
  
  res.send(`
    <h2>✅ Authentification réussie!</h2>
    <p><strong>CODE:</strong><br><textarea rows="3" cols="80">${code}</textarea></p>
    <p><strong>REALM ID:</strong> ${realmId}</p>
    <p>Copie le CODE et retourne dans ton terminal.</p>
  `);
});

app.listen(process.env.PORT || 10000, () => console.log('Server running'));
