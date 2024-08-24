import GridStyle from "./GridStyle"

function DataContainer({ productName, categoryName, price}) {
  return (
    <GridStyle>
        <p className="text-yellow-600 text-md mb-2">{categoryName}</p>
        <h1 className="text-3xl font-bold text-gray-100 mb-1">{productName}</h1>
        <p className="text-md font-bold text-gray-600 mb-2">${price}</p>
    </GridStyle>
  )
}

export default DataContainer