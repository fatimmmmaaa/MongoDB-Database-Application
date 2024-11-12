import mongoose from "mongoose";
const { Schema } = mongoose;

const animeSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    abilities: {type: String, required: true},
});

export default new mongoose.model("Anime", animeSchema);