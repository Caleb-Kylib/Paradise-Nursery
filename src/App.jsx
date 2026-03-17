import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

const App = () => {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStarted = () => {
        setShowProductList(true);
    };

    return (
        <Router>
            <div className="min-h-screen bg-white">
                {!showProductList ? (
                    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0 landing-page-bg transition-transform duration-[10s] scale-110 motion-safe:animate-[pulse_10s_infinite]">
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 text-white">
                            {/* Left Side */}
                            <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
                                <div className="inline-block px-4 py-1.5 bg-primary-600/30 backdrop-blur-md rounded-full border border-primary-400/30 text-primary-200 text-xs font-bold uppercase tracking-widest mb-2">
                                    Experience Nature Indoors
                                </div>
                                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                                    Welcome to <br />
                                    <span className="text-primary-400">Paradise Nursery</span>
                                </h1>
                                <p className="text-xl md:text-2xl font-light text-gray-200 border-l-4 border-primary-500 pl-4 py-2 italic">
                                    "Where Green Meets Serenity"
                                </p>
                                <div className="pt-4">
                                    <button
                                        onClick={handleGetStarted}
                                        className="bg-primary-600 hover:bg-primary-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-primary-900/40 hover:scale-105 active:scale-95 group flex items-center gap-2 mx-auto md:mx-0"
                                    >
                                        Get Started
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="md:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl animate-fade-in [animation-delay:200ms]">
                                <h2 className="text-2xl font-bold mb-6 text-primary-300">Our Mission</h2>
                                <AboutUs />
                                <div className="pt-4 flex gap-4 opacity-80">
                                    <div className="text-center">
                                        <span className="block text-3xl font-bold">50+</span>
                                        <span className="text-xs uppercase">Varieties</span>
                                    </div>
                                    <div className="h-10 w-px bg-white/30 self-center"></div>
                                    <div className="text-center">
                                        <span className="block text-3xl font-bold">10k+</span>
                                        <span className="text-xs uppercase">Happy Customers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/products" element={<ProductList />} />
                            <Route path="/cart" element={<CartItem />} />
                        </Routes>
                    </div>
                )}
            </div>
        </Router>
    );
};

export default App;
