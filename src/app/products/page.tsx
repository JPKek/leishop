'use client';
import { useState,useEffect } from "react";
import ProductList from "@/app/components/productList";
import Navbar from "../components/navbar";

interface Product {
  id:string;
  price:number;
  image:string;
  type:string;
  color:string;
  shape:string;
}

function Products() {

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
  
  return(
    <div>
      <Navbar />
      <h1 className="text-4xl text-[#FA4D58] text-center font-bold mt-12">Découvrez nos produits</h1>
      <ProductList products={products} />
    </div>
  )
}
export default Products;