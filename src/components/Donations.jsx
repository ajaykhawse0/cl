import React from "react";
import {
   SprayCan,
  HeartHandshake,
  Shirt,
  Users,
  Home,
 
   Zap,            
   AmbulanceIcon
} from "lucide-react";

import { FaDonate } from "react-icons/fa";

const donationCategories = [
    {
        icon: <Users className="text-blue-600" size={28} />,
        label: "Orphanages & old age homes",
    },
    {
        icon: <Home className="text-green-600" size={28} />,
        label: "Homeless shelters & slum communities",
    },
    {
        icon: <AmbulanceIcon className="text-red-600" size={28} />,
        label: "People in need after hospital discharge",
    },
    {
        icon: <Zap className="text-yellow-600" size={28} />,
        label: "Disaster-affected areas",
    },
];

const donationItems = [
    "Shirts, T-shirts, trousers, jeans",
    "Sarees, salwar suits, kurtas",
    "Sweaters, jackets, blankets",
    "Towels, bedsheets (in good condition)",
    "Kids' clothing",
];

export default function Donations() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-4">
                <SprayCan size={36} className="text-blue-700" />
                <h1 className="text-3xl font-bold">CleanDive – Donate Your Clothes, Share Dignity</h1>
            </div>
            <p className="mb-4 text-lg">
                Do you have clothes in good condition that you no longer wear? Don’t let them go to waste.
                Donate them through <span className="font-semibold">CleanDive</span>, and we’ll make sure they reach the people who truly need them — fresh, clean, and folded.
            </p>
            <div className="flex items-center gap-2 mb-2">
                <HeartHandshake className="text-pink-600" size={24} />
                <h2 className="text-xl font-semibold">What We Do:</h2>
            </div>
            <p className="mb-2">
                At CleanDive, we collect gently used clothes from donors like you, wash and sanitize them in our hygienic laundry facility, and deliver them to:
            </p>
            <ul className="mb-6 space-y-2">
                {donationCategories.map((cat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        {cat.icon}
                        <span>{cat.label}</span>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2 mb-2">
                <Shirt className="text-purple-600" size={24} />
                <h2 className="text-xl font-semibold">What You Can Donate:</h2>
            </div>
            <ul className="mb-8 list-disc list-inside space-y-1">
                {donationItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div className="flex justify-center">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSep3K0AYYAGB2PieZLoEdSNiXDw3r_oYRC-ceUHJfcxGV8b-g/viewform?usp=sharing&ouid=112472627571134550710 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                >
                    <FaDonate size={22} />
                    Donate Now
                </a>
            </div>
        </div>
    );
}
