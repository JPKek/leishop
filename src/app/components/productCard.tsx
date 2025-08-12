import Image from "next/image";

function ProductCard({product}:any) {
  const name = product.type+ ' ' + product.forme + '' + product.color
  return(
    <div className="flex flex-col space-y-4 bg-white shadow-lg rounded-xl">
      <div className="relative w-full">
        <Image 
        src={product.image}
        alt={name}
        fill
        className="object-cover"
        />
      </div>
      <h1 className="font-bold">{name}</h1>
      <h3 className="font-bold">{product.price}</h3>
      <div className="text-center">
      <button className="text-white bg-[#FA4D58] cursor-pointer px-4 py-2 rounded-lg hover:bg-[#FA4D48]">Je commande</button>
      </div>
    </div>
  )
}
export default ProductCard;