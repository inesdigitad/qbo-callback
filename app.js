const express = require('express');
const app = express();

app.get('/callback', (req, res) => {
  const code = req.query.code;
  const realmId = req.query.realmId;
  console.log('CODE:', code);
  console.log('REALM_ID:', realmId);
  res.send(`
    <h2>✅ Authentification QuickBooks réussie!</h2>
    <p>Tu peux fermer cette fenêtre et retourner dans Claude Code.</p>
  `);
});

app.listen(process.env.PORT || 10000, () => console.log('Server running'));
