import express from "express";
import { getJanjiTemu } from "../controllers/JanjiTemu_Controller.js"

const router = express.Router();

router.get('/api/listJanjiTemu', getJanjiTemu);


export default router;