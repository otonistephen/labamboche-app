import { firstProductsList } from "../_data/data";


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response(
      JSON.stringify({ error: 'Missing id parameter' }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const product = firstProductsList.find(
    p => p.id.toString() === id
  );

  if (!product) {
    return new Response(
      JSON.stringify({ error: 'Product not found' }),
      { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return new Response(
    JSON.stringify({
      id: product.id.toString(),
      price: Number(product.price),
      name: product.name,
      url: "/",     
      description: product.description || '',
      image: product.image || '',
      customFields: [] 
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}