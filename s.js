WS = require('ws');
wss = new WS.Server({ port: 8888 });
wss.on('connection', ws => ws.on('message', data => 
  wss.clients.forEach(client => client.send(data) )
  )
);