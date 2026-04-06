import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🚽</span>
            <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
              PortaFind<span className="text-blue-600">NE</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Browse Vendors</Link>
            <a href="mailto:hello@portafindne.example.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              List Your Business
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
