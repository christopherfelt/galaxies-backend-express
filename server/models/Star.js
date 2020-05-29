import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Objectid = mongoose.Types.ObjectId;

const Star = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "big flaming ball" },
    class: {
      type: String,
      enum: ["O", "B", "A", "F", "G", "K", "M", "Unknown"],
      default: "unknown",
    },
    galaxy: {
      type: Objectid,
      ref: "galaxies",
      default: "5ecec83287b9e647c07eced0",
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;

// OBAFGKM
