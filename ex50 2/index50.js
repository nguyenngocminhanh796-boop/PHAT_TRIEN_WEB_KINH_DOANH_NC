const express = require("express");
const bookRoutes = require("./routes/bookroutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.use("/ex50/boooks", bookRoutes);

app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});
