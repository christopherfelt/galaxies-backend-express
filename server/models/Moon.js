import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Objectid = mongoose.Types.ObjectId;

const Moon = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "big flaming ball" },
    planet: {
      type: Objectid,
      ref: "planets",
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;

// planet ids: 5ecedf564946e462806e223d, 5ecedf8b4946e462806e223e
