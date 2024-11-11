import mongoose from "mongoose";
const { Schema } = mongoose;

const actorSchema = new Schema({
    villiage: String,
    leader: String,
    description: String
});