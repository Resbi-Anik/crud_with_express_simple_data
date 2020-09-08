import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use("/people", userRoutes);

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
