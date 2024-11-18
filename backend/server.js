const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/reviews', require('./routes/reviews'));
app.use('/notifications', require('./routes/notifications'));
app.use('/userProfiles', require('./routes/userProfiles'));
app.use('/products', require('./routes/products'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});