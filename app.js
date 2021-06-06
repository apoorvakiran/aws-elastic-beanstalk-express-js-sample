const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The world is gonna change soon for me. I will start seeing the world from a devops perspective'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
