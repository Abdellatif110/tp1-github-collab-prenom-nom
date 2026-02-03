const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// API route for "Hello World"
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello World from Backend' });
});

// Root route serves the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Le port ${port} est déjà utilisé. Veuillez fermer l'autre instance.`);
    } else {
        console.error('ERREUR SERVEUR:', err);
    }
});
