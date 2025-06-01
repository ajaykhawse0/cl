export default function LaundryCard({ laundry, onSelect }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={laundry.image} 
        alt={laundry.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{laundry.name}</h2>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
            ⭐ {laundry.rating}
          </span>
        </div>
        <p className="text-gray-600 mt-2">Delivery: {laundry.deliveryTime}</p>
        <p className="text-gray-600">Min. Order: ₹{laundry.minOrder}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {laundry.services.map(service => (
            <span key={service} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
              {service}
            </span>
          ))}
        </div>
        <button 
          onClick={onSelect}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Select This Laundry
        </button>
      </div>
    </div>
  );
}