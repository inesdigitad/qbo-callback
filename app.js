const express = require('express');
const app = express();

app.get('/callback', (req, res) => {
  const code = req.query.code;
  const realmId = req.query.realmId;
  const state = req.query.state;
  
  // Redirige vers le serveur local sur ton Mac
  res.redirect(`http://localhost:8000/callback?code=${code}&realmId=${realmId}&state=${state}`);
});

app.listen(process.env.PORT || 10000, () => console.log('Server running'));
