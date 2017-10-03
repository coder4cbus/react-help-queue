const express = require('express');
const app = express();

app.use(express.static('/src/index.jsx'));
app.listen(process.env.PORT || 8080);
