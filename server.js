const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('dist'))

app.get('/',  (req, res) => {
    res.send('works')
})

app.listen(port, () => {
    console.log(`example port: ${port}`)
})