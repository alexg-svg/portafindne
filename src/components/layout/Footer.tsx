import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🚽</span>
              <span className="font-bold text-lg text-white">PortaFindNE</span>
            </div>
            <p className="text-sm leading-relaxed">
              The New England marketplace for portable sanitation rentals. Find trusted vendors in Connecticut, Rhode Island, and Massachusetts.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Browse by State</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/?state=CT" className="hover:text-white transition-colors">Connecticut Vendors</Link></li>
              <li><Link href="/?state=RI" className="hover:text-white transition-colors">Rhode Island Vendors</Link></li>
              <li><Link href="/?state=MA" className="hover:text-white transition-colors">Massachusetts Vendors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">For Vendors</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@portafindne.example.com" className="hover:text-white transition-colors">List Your Business</a></li>
              <li><a href="mailto:hello@portafindne.example.com" className="hover:text-white transition-colors">Update Your Listing</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} PortaFindNE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
