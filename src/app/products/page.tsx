const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_URL_PUBLIC_BACKEND}/products`, {
    next: { revalidate: 1 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

export default async function Home() {
  const { data } = await fetchProducts();

  console.log(data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {data.data.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </main>
  );
}
