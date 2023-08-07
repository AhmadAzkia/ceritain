import JanjiTemu from "../models/JanjiTemu_Model.js"

export const getJanjiTemu = async(req, res) => {
    try{
        const response = await JanjiTemu.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}