import express from 'express';
import { getCustomerDetails, getProductDetails, getTransactionDetails } from '../controllers/clientControllers.js'

const router = express.Router();

router.get('/products', getProductDetails);
router.get('/customers', getCustomerDetails);
router.get('/transactions', getTransactionDetails);

export default router;