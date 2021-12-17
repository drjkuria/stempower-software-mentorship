import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProvinceSchema = new Schema({
    localName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    }
})