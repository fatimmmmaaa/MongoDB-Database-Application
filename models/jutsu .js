import mongose from "mongoose";
const { Schema } = mongose;

const jujustuSchema = new Schema({
    jutsu: String,
    description: String,
    type: String
});