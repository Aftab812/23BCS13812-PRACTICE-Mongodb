const express = require('express');
const app = express();
require('./config/db');

app.use(express.json());

const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
