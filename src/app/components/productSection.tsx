import { useState,useEffect } from "react";
import ProductList from "./productList";
import Link from "next/link";

interface Product {
  id:string;
  price:number;
  image:string;
  type:string;
  color:string;
  shape:string;
}

function ProductSection() {

  const [products,setProducts] = useState<Product[]>([]);

  useEffect( () => {

    const fetchProducts = async () => {
     try {
      
      const res = await fetch('/api/content/products');
      if(!res.ok) throw new Error('Erreur lors de la récupération des données');
      const data = await res.json();
      setProducts(data);

     } catch (error:any) {
      console.log(error.message)
     };
      
    fetchProducts();
  }
},[]);

  const getRandomProducts = (arr : any, count = 3) => {
    const shuffled = [...arr].sort(()=>0.5 - Math.random());
    return shuffled.slice(0,count);
  }

  const productToShow = getRandomProducts(products,3);

  return (
    <section>  
      <h1 className="text-4xl text-[#FA4D58] text-center font-bold">Découvrez nos produits</h1>
      <ProductList products={productToShow} />
      <div className="text-center mt-6">
        <Link href='/products'>
         <button className="text-white bg-[#FA4D58] cursor-pointer px-4 py-2 rounded-lg hover:bg-[#FA4D48]">Voir plus</button>
        </Link>
      </div>
    </section>
  )
}
export default ProductSection;