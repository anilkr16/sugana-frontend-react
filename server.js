const express = require('express');
const path = require('path');

const app = express();
const HTML_FILE = path.resolve(__dirname, 'index.html');

app.use(express.static( path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})