function CtaSection() {
  return (
    <section className="w-full bg-[#FDEEF4] flex flex-col gap-4 justify-center items-center py-12 px-6 mt-12">
        <h1 className="text-4xl text-[#FA4D58] font-bold ">   Prête à trouver votre coup de cœur ? </h1>
        <p className="text-sm text-gray-700"> Découvrez nos créations artisanales et trouvez le bijou qui vous correspond. </p>
        <button className="text-white w-fit bg-[#FA4D58] cursor-pointer px-4 py-2 rounded-lg hover:bg-[#FA4D48]">
          <a href=""> Voir nos produits </a> 
        </button>

    </section>
  )
}
export default CtaSection;