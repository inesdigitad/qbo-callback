const express = require('express');
const app = express();

app.get('/callback', (req, res) => {
  const code = req.query.code;
  const realmId = req.query.realmId;
  res.send(`
    <h2>✅ Authentification QuickBooks réussie!</h2>
    <p><strong>Code:</strong> ${code}</p>
    <p><strong>Company ID (realmId):</strong> ${realmId}</p>
    <p>Copie ces deux valeurs et retourne dans Claude Code.</p>
  `);
});

app.listen(process.env.PORT || 10000, () => console.log('Server running'));
