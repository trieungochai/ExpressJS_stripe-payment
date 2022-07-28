const express = require("express");
const app = express();
const stripeController = require("./controllers/stripe.controller");

// middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.post("/stripe", stripeController);

const PORT = process.env.PORT || 3000;
const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
