const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const MongoStore = require("connect-mongo");

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "samadhanSecret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://aditysgoyal11:aditya1852004@cluster0.77vklin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // Your MongoDB Atlas URI
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// Auth Routes
app.use("/", authRoutes);

// complaint route
const complaintRoutes = require("./routes/submitComplaint");

app.use("/complaints", complaintRoutes);

// Middleware to protect routes
function isAuthenticated(req, res, next) {
  if (req.session.user) return next();
  res.redirect("/login.html");
}

// Example protected route
app.get("/home.html", isAuthenticated, (req, res, next) => {
  next();
});

// Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
