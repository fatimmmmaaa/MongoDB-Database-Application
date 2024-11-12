import mongoose from "mongoose";
const { Schema } = mongoose;

const actorSchema = new Schema({
    village: {type: String, required: true},
    leader: {type: String, required: true},
    description: {type: String, required: true},
});

export default new mongoose.model("Villages", actorSchema);