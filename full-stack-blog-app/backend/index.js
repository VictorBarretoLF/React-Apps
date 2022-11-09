const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/posts", require("./routes/postsRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
