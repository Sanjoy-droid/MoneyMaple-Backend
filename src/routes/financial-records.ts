

import express, { Request, Response } from "express";
import FinancialRecordsModel from "../schema/financial-records";

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordsModel.find({ userId });
    if (!records.length) {
      return res.status(404).send("No records found for this User");
    }
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(error);
  }
  //ljsf lksjf
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const record = new FinancialRecordsModel(req.body);
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
    const record = await FinancialRecordsModel.findByIdAndUpdate(
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

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordsModel.findByIdAndDelete(id);
    if (!record) {
      return res.status(404).send("Record not found");
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
