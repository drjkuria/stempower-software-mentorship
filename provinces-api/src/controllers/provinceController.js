import res from "express/lib/response";
import mongoose from "mongoose";

import { ProvinceSchema } from "../models/provinceModel";

const Province = mongoose.model('Province', ProvinceSchema);

export const addNewProvince = (req, res) => {
    let newProvince = new Province(req.body);
    newProvince.save((err, province) => {
        if (err) {
            res.send(err);
        }
        res.json(province);
    });
}

export const getProvinces = (req, res) => {
    Province.find({}, (err, province) => {
        if (err) {
            res.send(err);
        }
        res.json(province);
    });
}

export const getProvinceById = (req, res) => {
    Province.findById(req.params.provinceId, (err, province) => {
        if (err) {
            res.send(err);
        }
        res.json(province);
    });
}

export const updateProvince = (req, res) => {
    Province.findOneAndUpdate(
        { _id: req.params.provinceId }, req.body, {new: true, useFindAndModify: false}, (err, province) => {
        if (err) {
            res.send(err);
        }
        res.json(province);
    });
}

export const deleteProvince = (req, res) => {
    Province.deleteOne({_id: req.params.provinceId}, (err, province) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted province'});
    });
}