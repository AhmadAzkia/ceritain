import express from "express";
import { getJadwalPsikolog } from "../controllers/JadwalPsikolog_Controller.js"

const router = express.Router();

router.get('/api/JadwalPsikolog', getJadwalPsikolog);


export default router;