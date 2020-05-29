import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Objectid = mongoose.Types.ObjectId;

const Planet = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "big flaming ball" },
    isHabitable: { type: Boolean, default: false },
    star: {
      type: Objectid,
      ref: "stars",
      required: true,
    },
    species: [{ type: String, default: "none" }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;

// Star id: 5eced5c21efbd52e1cb9940e, 5eced5fb1efbd52e1cb9940f
