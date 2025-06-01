import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

// Data
const categories = [
    {
        id: 'men',
        name: "Men's Clothing",
        items: [
            { id: 'm1', name: 'Shirt', wash: 20, dryClean: 40, iron: 10 },
            { id: 'm2', name: 'T-Shirt', wash: 15, dryClean: 30, iron: 8 },
            { id: 'm3', name: 'Trousers', wash: 25, dryClean: 50, iron: 12 },
        ],
    },
    {
        id: 'women',
        name: "Women's Clothing",
        items: [
            { id: 'w1', name: 'Blouse', wash: 25, dryClean: 45, iron: 12 },
            { id: 'w2', name: 'Kurta', wash: 30, dryClean: 55, iron: 15 },
        ],
    },
    {
        id: 'children',
        name: "Children's Clothing",
        items: [
            { id: 'c1', name: 'T-Shirt', wash: 10, dryClean: 25, iron: 5 },
        ],
    },
    {
        id: 'household',
        name: 'Household Items',
        items: [
            { id: 'h1', name: 'Bed Sheet (Single)', wash: 50, dryClean: 100, iron: 20 },
            { id: 'h2', name: 'Bed Sheet (Double)', wash: 80, dryClean: 150, iron: 30 },
        ],
    },
];

// Redesigned ServiceSelection
export default function ServiceSelection({ laundry }) {
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('men');
    const navigate = useNavigate();

    // Add or update cart
    const updateCart = (item, serviceType, quantity) => {
        if (quantity < 0) return;
        const id = `${item.id}-${serviceType}`;
        setCart(prev => {
            const exists = prev.find(i => i.id === id);
            if (exists) {
                if (quantity === 0) return prev.filter(i => i.id !== id);
                return prev.map(i => i.id === id ? { ...i, quantity } : i);
            }
            if (quantity === 0) return prev;
            return [
                ...prev,
                {
                    id,
                    itemId: item.id,
                    name: item.name,
                    serviceType,
                    price: item[serviceType],
                    quantity,
                },
            ];
        });
    };

    // Get quantity from cart
    const getQuantity = (item, serviceType) => {
        const found = cart.find(i => i.id === `${item.id}-${serviceType}`);
        return found ? found.quantity : 0;
    };

    // Remove from cart
    const removeFromCart = id => setCart(cart.filter(i => i.id !== id));

    const totalAmount = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const currentCategory = categories.find(cat => cat.id === activeCategory);

    // Only pass the cart as state when navigating, don't display Checkout or total here
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center mb-8">
                <button
                    onClick={() => navigate('/schedule-pickup')}
                    className="mr-4 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                    ← Back
                </button>
                <h1 className="text-3xl font-bold tracking-tight">{laundry?.name || 'Select Laundry'}</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Categories & Items */}
                <div className="md:w-2/3">
                    {/* Categories */}
                    <div className="flex gap-2 mb-6 overflow-x-auto">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 rounded-full font-medium transition ${
                                    activeCategory === cat.id
                                        ? 'bg-indigo-600 text-white shadow'
                                        : 'bg-gray-100 text-gray-700 hover:bg-indigo-50'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Items Table */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">{currentCategory.name}</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2">Item</th>
                                    <th className="py-2 text-center">Wash</th>
                                    <th className="py-2 text-center">Dry Clean</th>
                                    <th className="py-2 text-center">Iron</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCategory.items.map(item => (
                                    <tr key={item.id} className="border-b last:border-0">
                                        <td className="py-3 font-medium">{item.name}</td>
                                        {['wash', 'dryClean', 'iron'].map(type => (
                                            <td key={type} className="py-3 text-center">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="text-gray-700 text-sm mb-1">₹{item[type]}</span>
                                                    <QuantitySelector
                                                        value={getQuantity(item, type)}
                                                        onChange={qty => updateCart(item, type, qty)}
                                                    />
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right: Cart */}
                <div className="md:w-1/3">
                    <div className="bg-white rounded-xl shadow p-6 sticky top-4">
                        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                        {cart.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty</p>
                        ) : (
                            <>
                                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                                    {cart.map(item => (
                                        <div key={item.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                                            <div>
                                                <p className="font-medium">{item.name} <span className="text-xs text-gray-500">({item.serviceType})</span></p>
                                                <p className="text-sm text-gray-600">{item.quantity} × ₹{item.price}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">₹{item.quantity * item.price}</span>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700 text-lg"
                                                    title="Remove"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t pt-4">
                                    <button
                                        className="w-full bg-indigo-600 text-white py-2 rounded font-bold hover:bg-indigo-700 transition"
                                        onClick={() =>
                                            navigate('/checkout', {
                                                state: {totalAmount, cart, laundry }
                                            })
                                        }
                                        disabled={laundry && totalAmount < laundry.minOrder}
                                    >
                                        Proceed to Checkout
                                    </button>
                                    {laundry && totalAmount < laundry.minOrder && (
                                        <p className="text-red-500 text-sm mt-2">
                                            Minimum order is ₹{laundry.minOrder}. Add ₹{laundry.minOrder - totalAmount} more.
                                        </p>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// QuantitySelector: compact, reusable
function QuantitySelector({ value, onChange }) {
    return (
        <div className="flex items-center border rounded-md overflow-hidden">
            <button
                onClick={() => onChange(Math.max(0, value - 1))}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                disabled={value === 0}
            >
                -
            </button>
            <span className="px-3 w-6 text-center">{value}</span>
            <button
                onClick={() => onChange(value + 1)}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
            >
                +
            </button>
        </div>
    );
}
