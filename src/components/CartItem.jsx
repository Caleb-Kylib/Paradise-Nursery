import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4 gap-4">
            {/* Product Info */}
            <div className="flex items-center space-x-4 w-full sm:w-1/2">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-inner"
                />
                <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">Unit Price: ${item.price}</p>
                    <p className="text-primary-700 font-semibold">Subtotal: ${item.totalPrice}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-6">
                {/* Quantity Controls */}
                <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                    <button
                        onClick={() => dispatch(cartActions.updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        className="p-1 hover:bg-white rounded transition-colors text-gray-600"
                    >
                        <Minus size={18} />
                    </button>
                    <span className="px-4 font-bold text-gray-800">{item.quantity}</span>
                    <button
                        onClick={() => dispatch(cartActions.updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="p-1 hover:bg-white rounded transition-colors text-gray-600"
                    >
                        <Plus size={18} />
                    </button>
                </div>

                {/* Delete */}
                <button
                    onClick={() => dispatch(cartActions.removeItem(item.id))}
                    className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-all"
                    title="Remove item"
                >
                    <Trash2 size={22} />
                </button>
            </div>

        </div>
    );
};

export default CartItem;
