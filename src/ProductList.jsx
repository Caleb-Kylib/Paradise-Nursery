import React from 'react';
import Navbar from './components/Navbar';
import PlantCard from './components/PlantCard';
import { plants } from './data/plants';

const ProductList = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="container mx-auto px-4 py-12 flex-grow">
                <header className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Our Plant Collection
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Find the perfect green companion for your home or office. From air-purifying wonders to exotic beauties, we have something for everyone.
                    </p>
                    <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full"></div>
                </header>

                {plants.map((category) => (
                    <section key={category.category} className="mb-20 last:mb-0">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 whitespace-nowrap">
                                {category.category}
                            </h3>
                            <div className="h-px bg-gray-200 w-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map((plant) => (
                                <PlantCard key={plant.id} plant={plant} />
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            <footer className="bg-white border-t border-gray-100 py-8">
                <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                    &copy; 2024 Paradise Nursery. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default ProductList;
