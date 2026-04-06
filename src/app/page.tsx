'use client';

import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import FilterBar from '@/components/filters/FilterBar';
import VendorGrid from '@/components/vendor/VendorGrid';
import { vendors } from '@/data/vendors';
import { filterVendors, DEFAULT_FILTERS } from '@/lib/filters';
import { FilterState } from '@/types';

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const filtered = filterVendors(vendors, filters);

  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <FilterBar filters={filters} onChange={setFilters} />
          </aside>
          <section className="flex-1 min-w-0">
            <VendorGrid vendors={filtered} />
          </section>
        </div>
      </main>
    </>
  );
}
