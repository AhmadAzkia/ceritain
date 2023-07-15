import User from "../models/User_Model.js";

export const getUser = async(req, res) => {
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}