const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("DB connected"))
  .catch(err => console.log("DB connection error:", err));
