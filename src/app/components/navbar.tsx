'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar () {
  const pathname = usePathname();

  return(

    <div>
      <nav className="w-full h-auto px-12 py-6 flex justify-between items-center shadow-md">
        <h1 className="text-[#FA4D58] font-bold uppercase">LeiShop</h1>
          <ul className="flex space-x-4">
            <li><Link href="/" className={pathname === '/' ? 'text-[#FA4D58] font-semibold' : 'hover:text-[#FA4D58] '}>Accueil</Link></li>
            <li><Link href="/products" className={pathname === '/products' ? 'text-[#FA4D58] font-semibold' : 'hover:text-[#FA4D58] '}>Produits</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? 'text-[#FA4D58] font-semibold' : 'hover:text-[#FA4D58] '}>Contact</Link></li>
            <li><Link href="/about" className={pathname === '/about' ? 'text-[#FA4D58] font-semibold' : 'hover:text-[#FA4D58] '}>A propos</Link></li>
          </ul>
      </nav>
    </div>
  )
}
export default Navbar;