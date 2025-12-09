const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes');
const authRouter = require('./routes/authentication');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors({
    origin: "http://localhost:5173",   // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.url)
  .then(() => console.log('connected to db'))
  .catch(err => console.error('DB connection error:', err));

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});

// app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'something went wrong';
  res.status(status).send({ success: false, status, message });
});
