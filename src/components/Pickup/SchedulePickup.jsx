import { useState } from 'react';
import LaundryCard from './LaundryCard';
import ServiceSelection from './ServiceSelection';
const laundries = [
  {
    id: 1,
    name: "Fresh & Clean Laundry",
    rating: 4.8,
    deliveryTime: "24-48 hours",
    minOrder: 50,
    services: ["Wash", "Dry Clean", "Iron"],
    image: "https://images.unsplash.com/photo-1735097437946-2dba2d3c3137?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeSUyMHNob3AlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Quick Wash Center",
    rating: 4.5,
    deliveryTime: "Same day",
    minOrder: 75,
    services: ["Express Wash", "Dry Clean"],
    image: "https://images.unsplash.com/photo-1735097437946-2dba2d3c3137?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeSUyMHNob3AlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
  }
];

export default function SchedulePickup() {
  const [selectedLaundry, setSelectedLaundry] = useState(null);

  if (selectedLaundry) {
    return <ServiceSelection laundry={selectedLaundry} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mt-20 mb-8">Select a Laundry Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {laundries.map(laundry => (
          <LaundryCard 
            key={laundry.id}
            laundry={laundry}
            onSelect={() => setSelectedLaundry(laundry)}
          />
        ))}
      </div>
    </div>
  );
}