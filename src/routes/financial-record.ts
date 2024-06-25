import express, {Request, Response} from "express";
import FinancialRecordModel  from "../schema/financial-records";

const router = express.Router();

router.get("/getAllByUserId", async (req: Request, res: Response) => {
    try {
        const records = await FinancialRecordModel.find();
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


export default router
