import { getDailySales, getSalesByCategories } from "../queries/salesQueries.js"


async function getDailySalesAndUnits(_, res){
    try {
        const dailySales = await getDailySales();
        return res.status(200).json({success: true, data: dailySales});
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}

async function getSalesByCategory(_, res){
    try {
        const salesByCategory = await getSalesByCategories();
        return res.status(200).json({success: true, data: salesByCategory});
    } catch (error) {
        return res.status(500).json({success: false, message: error});
    }
}


export {
    getDailySalesAndUnits,
    getSalesByCategory
}