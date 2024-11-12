import mongoose from "mongoose";
const { Schema } = mongoose;

const actorSchema = new Schema({
    village: String,
    leader: String,
    description: String
});

export default new mongoose.model("Villages", actorSchema);