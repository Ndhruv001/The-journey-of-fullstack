import { getProducts, getCustomers, getTransactions } from "../queries/clientQueries.js"


async function getProductDetails(_, res){
    try {
        const products = await getProducts();
        return res.status(200).json({success: true, data: products});
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}

async function getCustomerDetails(_, res){
    try {
        const customers = await getCustomers();
        return res.status(200).json({success: true, data: customers});
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}

async function getTransactionDetails(_, res){
    try {
        const transactions = await getTransactions();
        return res.status(200).json({success: true, data: transactions});
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}


export {
    getCustomerDetails,
    getProductDetails,
    getTransactionDetails
}