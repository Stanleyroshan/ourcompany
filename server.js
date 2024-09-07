const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can use any port

// Serve static files from the root directory, including 'assets'
app.use(express.static(__dirname));

// Serve static files from the 'public' directory (if you have one)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
