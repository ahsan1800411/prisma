const express = require('express');
const app = express();

app.use(express.json());

app.use('/user', require('./routes/userRoutes'));

app.listen(5000, () => console.log(`Server is up and running`));
