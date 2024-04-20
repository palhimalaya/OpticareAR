const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const connectDB = require("./config/db");
const cors = require("cors");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
const appointmentRoute = require("./routes/appointment");
const notificationRoute = require("./routes/notification");
const reviewRoute = require("./routes/review");

const app = express();
dotenv.config();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

//routes
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);

app.use('/api/cart', cartRoute);
// app.use('/api/orders', orderRoute);
app.use('/api/appointment', appointmentRoute);
app.use('/api/notification', notificationRoute);
app.use('/api/review', reviewRoute);

//error middlewares
app.use(notFound);
app.use(errorHandler);

//connect to db and start server
connectDB();


app.listen(8001, () => {
  console.log("listening on port 8001");
});
