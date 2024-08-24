import express from 'express';
import { getDailySalesAndUnits, getSalesByCategory } from '../controllers/salesControllers.js';

const router = express.Router();

router.get('/overview', getDailySalesAndUnits);
router.get('/breakdown', getSalesByCategory);


export default router;