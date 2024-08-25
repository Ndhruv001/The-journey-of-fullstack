import ErrorResponse from "@/components/ErrorResponse";
import LoadingPage from "../../components/LoadingPage";
import useGetProducts from "./hooks/useGetProducts";
import DataContainer from "./DataContainer";
import Header from "@/components/Header";

function Products() {
  const { data, isLoading, isError, error } = useGetProducts();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorResponse error={error} />;
  }

  return (
    <>
      <Header title="Products" subtitle="See your list of products." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data &&
          data.map((item, index) => (
            <DataContainer
              key={index}
              productName={item.product_name}
              categoryName={item.category_name}
              price={item.price}
            />
          ))}
      </div>
    </>
  );
}

export default Products;
