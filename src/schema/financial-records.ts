import mongoose from "mongoose";

interface FinancialRecord {
  userID: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;

}

const financialRecordsSchema = new mongoose.Schema<FinancialRecord>({
  userID: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});


const FinancialRecordsModel=mongoose.model<FinancialRecord>(
    "FinancialRecord",
    financialRecordsSchema
);


export default FinancialRecordsModel;