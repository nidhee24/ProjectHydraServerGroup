const express = require('express');
const aboutRoute = require('./routes/aboutRoute');
const roomRoutes = require('./routes/roombook');
const dealRoutes = require('./routes/DealRoute');
const hotelroomRoute = require('./routes/HotelRoom');


const restRoutes = require('./routes/api/restRoutes');
const connectDB = require('./config/connectDB');
//const userRoutes = require('./routes/api/userRoutes');
//const authRoutes = require('./routes/api/authRoute');
const reviewRoutes = require('./routes/api/reviewRoutes');
const careerRoute = require('./routes/api/careerRoute');
const supportRoute = require('./routes/api/supportRoute');
const activityRoute = require('./routes/api/activityRoute');
const userRegister = require('./routes/register');
const userLogin = require('./routes/login');
const package = require('./routes/package')
const addPackage = require('./routes/addPackage')
const removeUser = require('./routes/removeUser');
const rentalRoutes = require('./routes/api/rentalRoutes');
const flightsRoutes = require('./routes/api/flightsRoutes');
const paymentRoutes = require('./routes/api/paymentRoutes');
const blogRoutes = require('./routes/api/blogRoutes');
const cors = require('cors');
const app = express();

//set a middleware to parse dat
app.use(express.json());
connectDB();
app.use(cors());
app.use('/api/rest', restRoutes);
app.use('/career', careerRoute);
app.use('/support', supportRoute);
app.use('/activity', activityRoute);
app.use('/api/review', reviewRoutes);
app.use('/api/register', userRegister);
app.use('/api/login', userLogin);
app.use('/api/package',package);
app.use('/api/removeUser',removeUser);
app.use('/api/addPackage',addPackage);
app.use('/api/rooms', roomRoutes);
app.use('/api/about',aboutRoute);
app.use('/api/deal',dealRoutes);
app.use('/api/hotelroom',hotelroomRoute);
app.use('/api/rental', rentalRoutes);
app.use('/api/flight', flightsRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/blog', blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started');
});