require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan"); // logger
const cors = require("cors"); // for connecting frontend and backend

// cross origin resource sharing
// db setup
const sequelize = require("./utils/db");

// Models setup

const User = require("./models/userModel");
const Token = require("./models/tokenModel");
const Appointment = require("./models/appointmentModel");
const models = { User, Token, Appointment };
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// server defined
const app = express();

// CORS policy
const corsOptions = {
  origin: [
    // "http://192.168.0.241:5173",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "*",
  ],
  credentials: true,
  methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json()); // body parser
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get("/dev", (req, res) => {
  res.send("Website Template App");
});

// Routes -- routesn ka path file ka
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/appoint", appointmentRoutes);
app.use("/api/v1/admin", adminRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
    return sequelize.sync();
  })
  .then(() => {
    console.log("Models have been synchronized with the database.");

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
      console.log(`Server is Running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
