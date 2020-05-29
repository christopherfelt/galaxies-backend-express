import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Objectid = mongoose.Types.ObjectId;

const Species = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "unknown" },
    isExtinct: { type: Boolean, default: true },
    planets: [{ type: Objectid, ref: "planets", default: "none" }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;

// Star id: 5eced5c21efbd52e1cb9940e, 5eced5fb1efbd52e1cb9940f
