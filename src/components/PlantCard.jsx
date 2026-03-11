import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.some((item) => item.id === plant.id);

    const handleAddToCart = () => {
        if (!isInCart) {
            dispatch(cartActions.addItem(plant));
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 relative group flex flex-col">
            {/* Sale Tag */}
            <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                SALE
            </span>

            {/* Image Container */}
            <div className="h-60 overflow-hidden">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-800">{plant.name}</h3>
                <p className="text-primary-700 font-bold text-xl mb-2">${plant.price}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {plant.description}
                </p>

                <button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`mt-auto w-full py-2.5 rounded-lg font-semibold transition-all shadow-sm ${isInCart
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700 active:scale-[0.98]'
                        }`}
                >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default PlantCard;
