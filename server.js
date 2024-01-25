const express = require('express');
const notes = require('./data/notes');

const cors = require('cors')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoute')

const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
dotenv.config();
connectDB()
const app = express();
app.use(cors());
app.use(express.json())
// app.get('/',(req, res)=>{
//     res.send("API is running")
// })


app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(notFound)
app.use(errorHandler)
const PORT  = process.env.PORT || 5000
app.listen(5000, console.log(`Server start on Port http://localhost:${PORT}`))