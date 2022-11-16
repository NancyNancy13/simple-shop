import Product from "./Product";

export default function ProductList(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </main>
  );
}
