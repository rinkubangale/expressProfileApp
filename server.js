const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const user_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("I am live on server");
});

app.use("/api/user", user_routes);

function start() {
  app.listen(PORT, () => {
    console.log(`api server is live on ${PORT}`);
  });
}

start();
