"use strict";

const PORT = 3000;
const app = require("../app");

// node ./bin/www.js
// npm start

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});