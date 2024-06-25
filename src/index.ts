
import express, { Express } from 'express';

import connectToMongo from './db';
import financialRecordRouter from "./routes/financial-record";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectToMongo();


app.use("/financial-records", financialRecordRouter)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
