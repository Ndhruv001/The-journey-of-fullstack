import GridStyle from "../products/GridStyle";

function DataBox({ dataName, data, percentage }) {
  return (
    <GridStyle>
      <p className="text-yellow-600 text-md mb-2">{dataName}</p>
      <h1 className="text-3xl font-bold text-gray-100 mb-1">{data}</h1>
      <p className="text-md font-bold text-gray-600 mb-2">{percentage}%</p>
    </GridStyle>
  );
}

export default DataBox;
