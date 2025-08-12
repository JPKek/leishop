import Image from "next/image";
import Link from "next/link";

function HeroSection() {

  return(
    <div className="w-full bg-[#FDEEF4] flex justify-between items-center px-12 py-16">
      <div className="left-section w-1/2 flex flex-col gap-6 pl-24  ">
        <h1 className="text-7xl text-[#FA4D58] font-semibold italic tracking-wide">Venez découvrir
           <span className="block"> l'élégance </span>
           <span className="block"> de la résine epoxy </span> </h1>
        <p className="text-gray-700 text-sm">Des créations artisanales, uniques,
          <span className="block">délicates et intemporelles, pensées pour sublimer chaque instant.</span> </p>
          <Link href="/products">
            <button className=" text-white w-fit bg-[#FA4D58] cursor-pointer px-4 py-2 rounded-lg hover:bg-[#FA4D48]">
               Voir nos produits 
              </button>
          </Link>
      </div>
      <div className="right-section w-1/2 flex justify-center">
          <div className="relative aspect-[3/2] w-full max-w-[500px]">
            <Image
              src="/images/resine_necklace.jpeg"
              alt="bijou"
              fill
              className="object-cover rounded"
            />
          </div>
      </div>
    
    </div>
  )
}
export default HeroSection;