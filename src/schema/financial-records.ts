
import mongoose from "mongoose";

interface FinancialRecord {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

const financialRecordsSchema = new mongoose.Schema<FinancialRecord>({
  userId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Default value to current date if not provided
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

const FinancialRecordsModel = mongoose.model<FinancialRecord>("FinancialRecord", financialRecordsSchema);

export default FinancialRecordsModel;
