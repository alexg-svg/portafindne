import { Vendor } from '@/types';
import VendorCard from './VendorCard';

interface VendorGridProps {
  vendors: Vendor[];
}

export default function VendorGrid({ vendors }: VendorGridProps) {
  if (vendors.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🚽</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No vendors found</h3>
        <p className="text-gray-500">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-5">
        Showing <span className="font-semibold text-gray-700">{vendors.length}</span> vendor{vendors.length !== 1 ? 's' : ''}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {vendors.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}
