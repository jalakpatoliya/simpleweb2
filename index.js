const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ success: "success" })
})

app.listen(3000, () => {
    console.log('server listening to 3000');
})