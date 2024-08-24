import pool from "../db/connectDB.js";

async function getProducts() {
  try {
    const [products] = await pool.execute(
      "select p.product_name, c.category_name, p.price from products p join categories c on p.category_id = c.category_id"
    );
    console.log("🚀 ~ getProducts ~ products:", products);
    return products;
    
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error)
    throw new Error("Database not responded.")
  }
}

async function getCustomers(){
  try {
    const [customers] = await pool.execute("select customer_id, name, email, address from customers");
    return customers;
  } catch (error) {
    console.log("🚀 ~ getCustomers ~ error:", error);
    throw new Error("Database not responded.")
  }
}

async function getTransactions(){
  try {
    const [transactions] = await pool.execute("select o.order_id, c.name, p.product_name, oi.quantity, o.order_date, o.total_amount from orders o join order_items oi on oi.order_id = o.order_id join products p on p.product_id = oi.product_id join customers c on c.customer_id = o.customer_id");
    return transactions;
  } catch (error) {
    console.log("🚀 ~ getTransactions ~ error:", error);
    throw new Error("Database not responded.")
  }
}

export {
    getProducts,
    getCustomers,
    getTransactions
}
