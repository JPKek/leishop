import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact */}
        <div>
          <h3 className=" text-[#FA4D58] font-bold text-lg mb-2">Contact</h3>
          <p>
            <span className="font-bold">Téléphone : </span>
            <a href="tel:+220191637287" className="hover:text-[#FA4D58]">+229 01 91 63 72 87</a></p>
          <p> 
            <span className="font-bold">Email : </span>
            <a href="mailto:gisoalass@gmail.com" className="hover:text-[#FA4D58]">gisoalass@gmail.com</a>
          </p> 
        </div>

        {/* Liens de navigation */}
        <nav>
          <h3 className="text-[#FA4D58] font-bold text-lg mb-2">Liens rapides</h3>
          <ul className="flex flex-col md:flex-row gap-4">
            <li><Link href="/" className="hover:text-[#FA4D58]">Accueil</Link></li>
            <li><Link href="/products"  className="hover:text-[#FA4D58]">Produits</Link></li>
            <li><Link href="/contact" className="hover:text-[#FA4D58]">Contact</Link></li>
            <li><Link href="/about" className="hover:text-[#FA4D58]">À propos</Link></li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Leishop. Tous droits réservés.
      </div>
    </footer>
  );
}
