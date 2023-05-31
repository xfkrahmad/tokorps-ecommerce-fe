interface DetailProductProps {
  params?: {
    productId: string;
  };
  searchParams?: {
    page: string;
  };
}

const DetailProductPage = ({ params, searchParams }: DetailProductProps) => {
  return <div>{searchParams?.page}</div>;
};

export default DetailProductPage;
