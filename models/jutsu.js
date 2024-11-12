import mongose from "mongoose";
const { Schema } = mongose;

const jujustuSchema = new Schema({
    jutsu: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
});

//Model w schema
const Jutsu = mongose.model("Jutsu", jujustuSchema);

//Export
export default Jutsu;