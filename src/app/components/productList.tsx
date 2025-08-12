import { useEffect,useState } from "react";
import ProductCard from "./productCard";



function ProductList({products}:any) {
  
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {products.map((product: { id: any; }) =>(
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  )
}
export default ProductList;