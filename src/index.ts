import express, { Express } from "express";
import cors from "cors";

import connectToMongo from "./db";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
connectToMongo();

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
