import { Routes, Route } from "react-router-dom";

//COMPONENTS
import Transactions from "./scenes/transactions/Transactions";
import Performance from "./scenes/performance/Performance";
import Dashboard from "./scenes/dashboard/Dashboard";
import Customers from "./scenes/customers/Customers";
import Breakdown from "./scenes/breakdown/Breakdown";
import Daily from "./scenes/daily/Daily";
import Admin from "./scenes/admin/Admin";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Monthly from "./scenes/monthly/Monthly";
import Overview from "./scenes/overview/Overview";
import Products from "./scenes/products/Products";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/breakdown" element={<Breakdown />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
