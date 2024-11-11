import mongoose from "mongoose";
const { Schema } = mongoose;

const animeSchema = new Schema({
    name: String,
    lastName: String,
    abilities: String
});

export default new mongoose.model("Anime", animeSchema);