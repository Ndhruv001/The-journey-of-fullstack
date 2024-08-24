import pool from "../db/connectDB.js";

async function getDailySales() {
  try {
    const [dailySales] = await pool.execute(
      "SELECT DATE(o.order_date) AS day, SUM(o.total_amount) AS total_sales, SUM(oi.quantity) AS total_units FROM order_items oi JOIN orders o ON o.order_id = oi.order_id GROUP BY DATE(o.order_date)"
    );
    console.log("🚀 ~ getDailySales ~ dailySales:", dailySales);
    return dailySales;
    
  } catch (error) {
    console.log("🚀 ~ getDailySales ~ error:", error)
    throw new Error("Database not responded.")
  }
}

async function getSalesByCategories() {
  try {
    const [salesByCategory] = await pool.execute(
      "select c.category_name, sum(oi.total_price) as total_sales from order_items oi join products p on p.product_id = oi.product_id join categories c on c.category_id = p.category_id group by c.category_id, c.category_name"
    );
    console.log("🚀 ~ getSalesByCategories ~ salesByCategory:", salesByCategory);
    return salesByCategory;
    
  } catch (error) {
    console.log("🚀 ~ getSalesByCategories ~ error:", error)
    throw new Error("Database not responded.")
  }
}


export {
    getDailySales,
    getSalesByCategories
}
