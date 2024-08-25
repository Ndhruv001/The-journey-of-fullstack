const gridTemplate = `
  "a a b b lineChart lineChart lineChart lineChart lineChart lineChart lineChart lineChart"
  "c c d d lineChart lineChart lineChart lineChart lineChart lineChart lineChart lineChart"
  "transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable pieChart pieChart pieChart pieChart"
  "transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable pieChart pieChart pieChart pieChart"
  "transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable transactionTable pieChart pieChart pieChart pieChart"
`;

export function GridItem({ area, children }) {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-auto border-white border-2 text-gray-100 text-sm  shadow-blue-400 shadow-sm p-2"
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
        gap-4
        max-h-screen
      "
      style={{
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gridTemplateRows: "repeat(5, minmax(100px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}
    >
      {children}
    </div>
  );
}

export default GridLayout;
