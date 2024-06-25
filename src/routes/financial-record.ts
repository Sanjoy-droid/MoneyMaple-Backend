import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-records";

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const records = await FinancialRecordModel.find({ userId: userId });
  if (records.length == 0) {
    return res.status(404).send("No records found for this User");
  }

  try {
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const record = new FinancialRecordModel(req.body);
    await record.save();
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );
    if (!record) {
      return res.status(404).send("Record not found");
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/delete/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    if (!record) {
      return res.status(404).send("Record not found");
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
