const gridTemplateForSmall = `
  "AAreaChart BLineChart CBarChart"
  "AAreaChart BLineChart CBarChart"
  "AAreaChart BLineChart CBarChart"
  "AAreaChart BLineChart FScatterChart"
  "DLineChart EPieChart FScatterChart"
  "DLineChart EPieChart FScatterChart"
  "DLineChart ExpenseList DataVisualization"
  "ProductList ExpenseList DataVisualization"
  "ProductList ExpenseList TotalSumary"
  "ProductList ExpenseList TotalSumary"
`;

export function GridItem({ area, children }) {
  return (
    <div
      className="bg-black rounded-lg border-white border-2 text-gray-600 text-sm text-center shadow-blue-400 shadow-sm p-2"
      style={{ gridArea: area }}
    >
      {children}
    </div>
  );
}

function GridLayout({ children }) {
  return (
    <div
      className="
        grid 
        gap-2
        grid-cols-[repeat(3,minmax(370px,1fr))]  
        grid-rows-[repeat(10,minmax(60px,1fr))]  
        max-h-screen
      "
      style={{ gridTemplateAreas: gridTemplateForSmall }}
    >
      {children}
    </div>
  );
}

export default GridLayout;
