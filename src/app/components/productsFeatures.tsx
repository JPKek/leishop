import { useEffect, useState } from "react";

interface Feature {
  title : string,
  description : string
}

function ProductsFeatures() {
 const [features, setFeatures] = useState<Feature[]>([]);

 useEffect( () => {

  const fetchFeatures = async () => {
    const res = await fetch('/api/content/features');
    const data = await res.json();
    setFeatures(data);
  } 
  fetchFeatures();
 },[]);

  return(
    <div className="bg-white py-12 px-8">
      <h2 className="text-4xl text-[#FA4D58] font-bold text-center "> Pourquoi choisir nos créations ? </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.map((feature,index)=>(
            <div key={index} className=" w-[300px] bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-[#FDEEF4] transition-transform">
              <h2 className=" text-xl text-center font-semibold mb-2">{feature.title}</h2>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductsFeatures;