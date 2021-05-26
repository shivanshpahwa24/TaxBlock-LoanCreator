const express = require("express");
const app = express();

const path = require("path");

// Database
const connectDB = require("./config/db");
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/loans", require("./routes/api/loans"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
