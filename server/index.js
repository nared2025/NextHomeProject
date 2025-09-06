const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//Test api
app.get('/', (req, res) => {
    res.json({ message: 'สวัสดีจาก Node.js Backend'});
});

//start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
