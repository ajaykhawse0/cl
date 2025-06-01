import React, { useState } from 'react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('household');

  // Household items data
  const householdItems = [
    { id: 1, particulars: 'CURTAIN DOOR', qty: 'PC', dryClean: 150, washIron: 65, steamIron: 25 },
    { id: 2, particulars: 'CURTAIN DOOR WITH LINING', qty: 'PC', dryClean: 169, washIron: 69, steamIron: 25 },
    { id: 3, particulars: 'CURTAIN WINDOW', qty: 'PC', dryClean: 99, washIron: 45, steamIron: 20 },
    { id: 4, particulars: 'CURTAIN WINDOW WITH LINING', qty: 'PC', dryClean: 159, washIron: 65, steamIron: 25 },
    { id: 5, particulars: 'CURTAIN BELT', qty: 'PC', dryClean: 50, washIron: null, steamIron: null },
    { id: 6, particulars: 'BLIND DOOR', qty: 'PC', dryClean: 89, washIron: null, steamIron: null },
    { id: 7, particulars: 'BLIND WINDOW', qty: 'PC', dryClean: 59, washIron: 20, steamIron: 10 },
    { id: 8, particulars: 'BLANKET SINGLE', qty: 'PC', dryClean: 220, washIron: 79, steamIron: 45 },
    { id: 9, particulars: 'BLANKET SINGLE 2 PLY', qty: 'PC', dryClean: 280, washIron: 89, steamIron: 49 },
    { id: 10, particulars: 'BLANKET DOUBLE', qty: 'PC', dryClean: 249, washIron: 75, steamIron: 45 },
    { id: 11, particulars: 'BLANKET DOUBLE 2 PLY', qty: 'PC', dryClean: 199, washIron: 79, steamIron: 35 },
    { id: 12, particulars: 'QUILT DOUBLE', qty: 'PC', dryClean: 179, washIron: 69, steamIron: 45 },
    { id: 13, particulars: 'QUILT SINGLE', qty: 'PC', dryClean: 199, washIron: 85, steamIron: 49 },
    { id: 14, particulars: 'QUILT COVER SINGLE', qty: 'PC', dryClean: 119, washIron: 45, steamIron: 25 },
    { id: 15, particulars: 'QUILT COVER DOUBLE', qty: 'PC', dryClean: 149, washIron: 55, steamIron: 30 },
    { id: 16, particulars: 'DUVET', qty: 'PC', dryClean: 159, washIron: 65, steamIron: 35 },
    { id: 17, particulars: 'DUVET DOUBLE', qty: 'PC', dryClean: 199, washIron: 69, steamIron: 39 },
    { id: 18, particulars: 'BED SHEET SINGLE', qty: 'PC', dryClean: 59, washIron: 25, steamIron: 10 },
    { id: 19, particulars: 'BED SHEET DOUBLE', qty: 'PC', dryClean: 119, washIron: 39, steamIron: 20 },
    { id: 20, particulars: 'BED SPREAD SINGLE', qty: 'PC', dryClean: 120, washIron: 40, steamIron: 20 },
    { id: 21, particulars: 'BED SPREAD DOUBLE', qty: 'PC', dryClean: 149, washIron: 45, steamIron: 30 },
    { id: 22, particulars: 'SOFA COVER SMALL', qty: 'PC', dryClean: 49, washIron: 20, steamIron: 10 },
    { id: 23, particulars: 'SOFA COVER MEDIUM', qty: 'PC', dryClean: 60, washIron: 20, steamIron: 10 },
    { id: 24, particulars: 'SOFA COVER LARGE', qty: 'PC', dryClean: 69, washIron: 25, steamIron: 12 },
    { id: 25, particulars: 'CUSHION COVER', qty: 'PC', dryClean: 45, washIron: 20, steamIron: 10 },
    { id: 26, particulars: 'CUSHION COVERS MEDIUM', qty: 'PC', dryClean: 45, washIron: 20, steamIron: 10 },
    { id: 27, particulars: 'CUSHION COVER LARGE', qty: 'PC', dryClean: 55, washIron: 20, steamIron: 10 },
    { id: 28, particulars: 'PILLOW COVERS', qty: 'PC', dryClean: 45, washIron: 15, steamIron: 8 },
    { id: 29, particulars: 'CHAIR COVERS', qty: 'PC', dryClean: 65, washIron: 20, steamIron: 10 },
    { id: 30, particulars: 'HAND TOWEL', qty: 'PC', dryClean: 45, washIron: 15, steamIron: 8 },
    { id: 31, particulars: 'TOWEL LARGE', qty: 'PC', dryClean: 80, washIron: 35, steamIron: 10 },
    { id: 32, particulars: 'CARPET', qty: 'PC', dryClean: 20, washIron: null, steamIron: null },
    { id: 33, particulars: 'TABLE CLOTH SMALL', qty: 'PC', dryClean: 59, washIron: 25, steamIron: 10 },
    { id: 34, particulars: 'TABLE CLOTH LARGE', qty: 'PC', dryClean: 69, washIron: 25, steamIron: 10 },
    { id: 35, particulars: 'TABLE MAT', qty: 'PC', dryClean: 79, washIron: 30, steamIron: 15 },
    { id: 36, particulars: 'FOOT MATS', qty: 'PC', dryClean: 45, washIron: 15, steamIron: 8 },
    { id: 37, particulars: 'MATTRESS DOUBLE', qty: 'PC', dryClean: 799, washIron: 15, steamIron: 8 },
    { id: 38, particulars: 'BED HEAD', qty: 'PC', dryClean: 1299, washIron: 15, steamIron: 8 },
    { id: 39, particulars: 'BAG', qty: 'PC', dryClean: 249, washIron: 79, steamIron: 0 },
    { id: 40, particulars: 'BAGPACK LARGE', qty: 'PC', dryClean: 249, washIron: 79 },
    { id: 41, particulars: 'BAGPACK MEDIUM', qty: 'PC', dryClean: 199, washIron: 59 },
    { id: 42, particulars: 'BAGPACK SMALL', qty: 'PC', dryClean: 179, washIron: 69 },
    { id: 43, particulars: 'FACE TOWEL', qty: 'PC', dryClean: 25, washIron: 10, steamIron: 8 },
    { id: 44, particulars: 'RAZAI', qty: 'PC', dryClean: 179, washIron: 79, steamIron: 39 },
    { id: 45, particulars: 'SOFT TOY', qty: 'PC', dryClean: 99, washIron: 49 },
    { id: 46, particulars: 'SOFT TOY MEDIUM', qty: 'PC', dryClean: 149, washIron: 69 },
    { id: 47, particulars: 'SOFT TOY LARGE', qty: 'PC', dryClean: 199, washIron: 85 },
    { id: 48, particulars: 'SUIT CASE SMALL', qty: 'PC', dryClean: 129 },
    { id: 49, particulars: 'SUIT CASE MEDIUM', qty: 'PC', dryClean: 149 },
    { id: 50, particulars: 'SUIT CASE BIG', qty: 'PC', dryClean: 179 },
    { id: 51, particulars: 'MOSQUITO NET', qty: 'PC', dryClean: 119 },
    { id: 52, particulars: 'MATTRESS SINGLE', qty: 'PC', dryClean: 599 },
]  ;

  const menItems = [
  { id: 1, particulars: 'SHIRT', qty: 'PC', dryClean: 40, washIron: 18, steamIron: 10 },
  { id: 2, particulars: 'SILK SHIRT', qty: 'PC', dryClean: 60, washIron: 18, steamIron: null },
  { id: 3, particulars: 'T-SHIRT', qty: 'PC', dryClean: 60, washIron: 18, steamIron: 10 },
  { id: 4, particulars: 'PANTS', qty: 'PC', dryClean: 60, washIron: 18, steamIron: 10 },
  { id: 5, particulars: 'JEANS', qty: 'PC', dryClean: 60, washIron: 18, steamIron: 10 },
  { id: 6, particulars: 'COAT', qty: 'PC', dryClean: '150-200', washIron: 69, steamIron: 25 },
  { id: 7, particulars: 'WAIST COAT', qty: 'PC', dryClean: 69, washIron: 29, steamIron: 14 },
  { id: 8, particulars: 'LONG COAT', qty: 'PC', dryClean: 219, washIron: 99, steamIron: 45 },
  { id: 9, particulars: 'JACKET FULL SLEEVES', qty: 'PC', dryClean: 169, washIron: 69, steamIron: 25 },
  { id: 10, particulars: 'JACKET HALF SLEEVES', qty: 'PC', dryClean: 149, washIron: 49, steamIron: 18 },
  { id: 11, particulars: 'JACKET WITH HOOD', qty: 'PC', dryClean: 209, washIron: 99, steamIron: null },
  { id: 12, particulars: 'LEATHER JACKETS', qty: 'PC', dryClean: 450, washIron: 49, steamIron: 18 },
  { id: 13, particulars: 'SWEAT SHIRT', qty: 'PC', dryClean: 99, washIron: 69, steamIron: 256 }, // Note: Verify steamIron value
  { id: 14, particulars: 'SWEAT SHIRT WITH HOOD', qty: 'PC', dryClean: 169, washIron: 20, steamIron: 10 },
  { id: 15, particulars: 'KURTA', qty: 'PC', dryClean: 59, washIron: 30, steamIron: 15 },
  { id: 16, particulars: 'KURTA HEAVY', qty: 'PC', dryClean: 89, washIron: 29, steamIron: 12 },
  { id: 17, particulars: 'DHOTI', qty: 'PC', dryClean: 79, washIron: 39, steamIron: 18 },
  { id: 18, particulars: 'SAFARI SUIT COAT', qty: 'PC', dryClean: 119, washIron: 99, steamIron: 35 },
  { id: 19, particulars: 'ACHKAN', qty: 'PC', dryClean: 249, washIron: 16, steamIron: 10 },
  { id: 20, particulars: 'SAFARI SUIT PANTS', qty: 'PC', dryClean: 50, washIron: 16, steamIron: 10 },
  { id: 21, particulars: 'TRACK PANT', qty: 'PC', dryClean: 50, washIron: 15, steamIron: null },
  { id: 22, particulars: 'SWIMMING COSTUME', qty: 'PC', dryClean: 35, washIron: 15, steamIron: null },
  { id: 23, particulars: 'UNDER WEAR', qty: 'PC', dryClean: 30, washIron: 12, steamIron: null },
  { id: 24, particulars: 'VEST', qty: 'PC', dryClean: 30, washIron: 49, steamIron: 25 },
  { id: 25, particulars: 'BELT', qty: 'PC', dryClean: 20, washIron: 49, steamIron: 20 },
  { id: 26, particulars: 'BLAZER/COAT - LONG', qty: 'PC', dryClean: 199, washIron: 149, steamIron: 49 },
  { id: 27, particulars: 'BLAZER/COAT - SHORT', qty: 'PC', dryClean: 159, washIron: 20, steamIron: 10 },
  { id: 28, particulars: 'BOOTS LEATHER', qty: 'PC', dryClean: 320, washIron: 20, steamIron: 10 },
  { id: 29, particulars: 'CAP', qty: 'PC', dryClean: 40, washIron: 25, steamIron: 10 },
  { id: 30, particulars: 'DHOTI/LUNGI (SILK)', qty: 'PC', dryClean: 45, washIron: 25, steamIron: 10 },
  { id: 31, particulars: 'DHOTI HEAVY', qty: 'PC', dryClean: 80, washIron: 20, steamIron: 10 },
  { id: 32, particulars: 'DHOTI NORMAL', qty: 'PC', dryClean: 65, washIron: 49, steamIron: 25 },
  { id: 33, particulars: 'TROUSERS', qty: 'PC', dryClean: 45, washIron: 8, steamIron: null },
  { id: 34, particulars: 'GLOVES (LEATHER)', qty: 'PC', dryClean: 179, washIron: 18, steamIron: null },
  { id: 35, particulars: 'HANDKERCHIEF', qty: 'PC', dryClean: 15, washIron: 35, steamIron: null },
  { id: 36, particulars: 'HATS', qty: 'PC', dryClean: 40, washIron: 35, steamIron: null },
  { id: 37, particulars: 'JOGGERS', qty: 'PC', dryClean: 85, washIron: 35, steamIron: null },
  { id: 38, particulars: 'KURTA (COTTON)', qty: 'PC', dryClean: 75, washIron: 18, steamIron: 10 },
  { id: 39, particulars: 'KURTA (HEAVY)', qty: 'PC', dryClean: 110, washIron: 18, steamIron: 10 },
  { id: 40, particulars: 'PAGDI', qty: 'PC', dryClean: 60, washIron: 18, steamIron: 10 },
  { id: 41, particulars: 'PAYJAMA', qty: 'PC', dryClean: 40, washIron: 19, steamIron: 10 },
  { id: 42, particulars: 'SAFARI SHIRT', qty: 'PC', dryClean: 60, washIron: 59, steamIron: 22 },
  { id: 43, particulars: 'SAFARI PANT', qty: 'PC', dryClean: 60, washIron: 10, steamIron: null },
  { id: 44, particulars: 'SHERWANI', qty: 'PC', dryClean: 199, washIron: 10, steamIron: null },
  { id: 45, particulars: 'SHORTS', qty: 'PC', dryClean: 25, washIron: 49, steamIron: 15 },
  { id: 46, particulars: 'SOCKS PAIR', qty: 'PC', dryClean: 20, washIron: 59, steamIron: 18 },
  { id: 47, particulars: 'SUIT 2 PC', qty: 'PC', dryClean: 179, washIron: 15, steamIron: 8 },
  { id: 48, particulars: 'SUIT 3 PC', qty: 'PC', dryClean: 199, washIron: 39, steamIron: 12 },
  { id: 49, particulars: 'TRACK PANT', qty: 'PC', dryClean: 40, washIron: null, steamIron: null },
  { id: 50, particulars: 'TRACK SUIT', qty: 'PC', dryClean: 79, washIron: null, steamIron: null }
];

 const womenItems = [
  { id: 1, particulars: 'SHIRT', qty: 'FC', dryClean: 32, washIron: 18, steamIron: 10 },
  { id: 2, particulars: 'BLOUSE', qty: 'FC', dryClean: 40, washIron: 15, steamIron: 11 },
  { id: 3, particulars: 'BLOUSE DESIGNER', qty: 'FC', dryClean: 60, washIron: 20, steamIron: 13 },
  { id: 4, particulars: 'BLOUSE HEAVY WORK', qty: 'FC', dryClean: 55, washIron: 25, steamIron: 15 },
  { id: 5, particulars: 'BLOUSE NORMAL', qty: 'FC', dryClean: 50, washIron: 18, steamIron: 13 },
  { id: 6, particulars: 'CHOLI', qty: 'FC', dryClean: 135, washIron: 60, steamIron: 29 },
  { id: 7, particulars: 'LEHANGA', qty: 'FC', dryClean: 180, washIron: 99, steamIron: 59 },
  { id: 8, particulars: 'DUPATTA', qty: 'FC', dryClean: 35, washIron: 12, steamIron: 3 },
  { id: 9, particulars: 'COAT-LONG', qty: 'FC', dryClean: 300, washIron: 49, steamIron: 25 },
  { id: 10, particulars: 'COAT-SHORT', qty: 'FC', dryClean: 100, washIron: 39, steamIron: 22 },
  { id: 11, particulars: 'DESIGNER CHOLI', qty: 'FC', dryClean: 180, washIron: 50, steamIron: 30 },
  { id: 12, particulars: 'DESIGNER LEHANGA', qty: 'FC', dryClean: 250, washIron: 139, steamIron: 99 },
  { id: 13, particulars: 'DESIGNER DUPATTA', qty: 'FC', dryClean: 150, washIron: 99, steamIron: 79 },
  { id: 14, particulars: 'DESIGNER KURTA', qty: 'FC', dryClean: 135, washIron: 92, steamIron: 75 },
  { id: 15, particulars: 'DRESS', qty: 'FC', dryClean: 60, washIron: 75, steamIron: 18 },
  { id: 16, particulars: 'DRESS (COTTON)', qty: 'FC', dryClean: 99, washIron: 40, steamIron: 23 },
  { id: 17, particulars: 'DRESS (HEAVY)', qty: 'FC', dryClean: 198, washIron: 99, steamIron: 49 },
  { id: 18, particulars: 'FROCK', qty: 'FC', dryClean: 60, washIron: 25, steamIron: 18 },
  { id: 19, particulars: 'JUMPSUIT LONG', qty: 'FC', dryClean: null, washIron: 169, steamIron: 99 },
  { id: 20, particulars: 'JUMPSUIT SHORT', qty: 'FC', dryClean: null, washIron: 40, steamIron: 29 },
  { id: 21, particulars: 'DRESS INDO WESTERN', qty: 'FC', dryClean: 389, washIron: 38, steamIron: 25 },
  { id: 22, particulars: 'DUNGAREE LONG', qty: 'FC', dryClean: 99, washIron: 35, steamIron: 10 },
  { id: 23, particulars: 'DUNGAREE SHORT', qty: 'FC', dryClean: 92, washIron: 29, steamIron: 14 },
  { id: 24, particulars: 'DUPATTA', qty: 'FC', dryClean: 35, washIron: 39, steamIron: 18 },
  { id: 25, particulars: 'DUPATTA HEAVY WORK', qty: 'FC', dryClean: 75, washIron: 160, steamIron: 69 },
  { id: 26, particulars: 'F+A1:L28ORMAL AND SEMI FORMAL TROUSER', qty: 'FC', dryClean: 80, washIron: 79, steamIron: 49 },
  { id: 27, particulars: 'FORMAL GOWN LONG HEAVY  WORK', qty: 'FC', dryClean: 139, washIron: 299, steamIron: 199 },
  { id: 28, particulars: 'FORMAL GOWN LONG NORMAL', qty: 'FC', dryClean: 149, washIron: 239, steamIron: 200 },
  { id: 29, particulars: 'GHAGRA 3PC', qty: 'FC', dryClean: 499, washIron: 125, steamIron: 89 },
  { id: 30, particulars: 'GHAGRA HEAVY 3PCS', qty: 'FC', dryClean: 499, washIron: 12, steamIron: 8 },
  { id: 31, particulars: 'GLOVES LEATHER', qty: 'FC', dryClean: 199, washIron: 7, steamIron: 4 },
  { id: 32, particulars: 'GLOVES WOOLEN', qty: 'FC', dryClean: 25, washIron: 19, steamIron: 10 },
  { id: 33, particulars: 'HANDKERCHIEF', qty: 'FC', dryClean: 4, washIron: 13, steamIron: 5 },
  { id: 34, particulars: 'HATS', qty: 'FC', dryClean: 45, washIron: 149, steamIron: 99 },
  { id: 35, particulars: 'INNERWWEAR/UNDERGARMENTS', qty: 'FC', dryClean: 19, washIron: 99, steamIron: 49 },
  { id: 36, particulars: 'JACKETS-FAUX FUR LONG', qty: 'FC', dryClean: 229, washIron: 299, steamIron: 199 },
  { id: 37, particulars: 'JACKETS-FAUX FUR SHORT', qty: 'FC', dryClean: 180, washIron: 89, steamIron: 39 },
  { id: 38, particulars: 'JACKET LEATHER', qty: 'FC', dryClean: 499, washIron: 49, steamIron: 29 },
  { id: 39, particulars: 'JACKET NORMAL LONG', qty: 'FC', dryClean: 349, washIron: 100, steamIron: 99 },
  { id: 40, particulars: 'JACKET NORMAL SHORT', qty: 'FC', dryClean: 59, washIron: 79, steamIron: 39 },
  { id: 41, particulars: 'JACKET PUFFER LONG', qty: 'FC', dryClean: 219, washIron: 39, steamIron: 15 },
  { id: 42, particulars: 'JACKET REXINE', qty: 'FC', dryClean: 129, washIron: 39, steamIron: 15 },
  { id: 43, particulars: 'JEANS', qty: 'FC', dryClean: 69, washIron: 18, steamIron: 10 },
  { id: 44, particulars: 'JEGGINGS', qty: 'FC', dryClean: 69, washIron: 28, steamIron: 16 },
  { id: 45, particulars: 'KAMEEZ/KURTA', qty: 'FC', dryClean: 49, washIron: 39, steamIron: 19 },
  { id: 46, particulars: 'KAMEEZ/KURTI COTTON', qty: 'FC', dryClean: 70, washIron: 39, steamIron: 39 },
  { id: 47, particulars: 'KURTA+PANTS/SALWAR/CHURIDAR', qty: 'FC', dryClean: 39, washIron: 89, steamIron: 49 },
  { id: 48, particulars: 'KURTA+PANTS/SALWAR/CHURIDAR+DUPATTA', qty: 'FC', dryClean: 139, washIron: 179, steamIron: 99 },
  { id: 49, particulars: 'LADIES SUITS 2 PCS', qty: 'FC', dryClean: 179, washIron: 228, steamIron: 12 },
  { id: 50, particulars: 'LADIES SUITS 3 PCS', qty: 'FC', dryClean: 229, washIron: 89, steamIron: 39 },
  { id: 51, particulars: 'PALAZO PANT', qty: 'FC', dryClean: 40, washIron: 82, steamIron: 39 },
  { id: 52, particulars: 'PARKA COAT LONG', qty: 'FC', dryClean: 199, washIron: 12, steamIron: 7 },
  { id: 53, particulars: 'PARKA COAT SHORT', qty: 'FC', dryClean: 189, washIron: 79, steamIron: 39 },
  { id: 54, particulars: 'PETICOAT COTTON', qty: 'FC', dryClean: 39, washIron: 39, steamIron: 18 },
  { id: 55, particulars: 'SALWAR/CHURIDAR 3PCS', qty: 'FC', dryClean: 179, washIron: 99, steamIron: 49 },
  { id: 56, particulars: 'SAREE ( COTTON/SYNTHETIC/LIGHT )', qty: 'FC', dryClean: 99, washIron: 89, steamIron: 49 },
  { id: 57, particulars: 'SAREE ( EMBROIDERED/HEAVY )', qty: 'FC', dryClean: 189, washIron: 239, steamIron: 89 },
  { id: 59, particulars: 'SAREE DESIGNER', qty: 'FC', dryClean: 339, washIron: 25, steamIron: 12 },
  { id: 60, particulars: 'SAREE PLAIN', qty: 'FC', dryClean: 59, washIron: 30, steamIron: 6 },
  { id: 61, particulars: 'SHIRT', qty: 'FC', dryClean: 60, washIron: 20, steamIron: 10 },
  { id: 62, particulars: 'SHORTS', qty: 'FC', dryClean: 16, washIron: 18, steamIron: 8 },
  { id: 63, particulars: 'SKIRT', qty: 'FC', dryClean: 59, washIron: 38, steamIron: 15 },
  { id: 64, particulars: 'SKIRT ( PENCIL/PLEATED/OTHER )', qty: 'FC', dryClean: 49, washIron: 13, steamIron: 8 },
  { id: 65, particulars: 'SKIRT LONG', qty: 'FC', dryClean: 89, washIron: 20, steamIron: 10 },
  { id: 66, particulars: 'STOLE/SCARF', qty: 'FC', dryClean: 25, washIron: 17, steamIron: 9 },
  { id: 67, particulars: 'SWIMSUIT BIKINI SUIT', qty: 'FC', dryClean: 39, washIron: null, steamIron: null },
  { id: 68, particulars: 'T-SHIRT', qty: 'FC', dryClean: 39, washIron: null, steamIron: null }
];

  const childrenItems = [
    { id: 1, particulars: 'T-Shirt', qty: 'PC', dryClean: 40, washIron: 25, steamIron: 15 },
    { id: 2, particulars: 'Shorts', qty: 'PC', dryClean: 45, washIron: 30, steamIron: 20 }
  ];

  const getActiveItems = () => {
    switch (activeTab) {
      case 'men': return menItems;
      case 'women': return womenItems;
      case 'children': return childrenItems;
      default: return householdItems;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Laundry Service Pricing</h1>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('household')}
          className={`px-6 py-3 font-medium text-lg ${activeTab === 'household' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Household Items
        </button>
        <button
          onClick={() => setActiveTab('men')}
          className={`px-6 py-3 font-medium text-lg ${activeTab === 'men' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Men's Clothing
        </button>
        <button
          onClick={() => setActiveTab('women')}
          className={`px-6 py-3 font-medium text-lg ${activeTab === 'women' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Women's Clothing
        </button>
        <button
          onClick={() => setActiveTab('children')}
          className={`px-6 py-3 font-medium text-lg ${activeTab === 'children' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Children's Clothing
        </button>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.N</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dry-Clean (₹)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wash & Iron (₹)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steam & Iron (₹)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {getActiveItems().map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.particulars}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.dryClean || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.washIron || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.steamIron || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Note:</h3>
        <p className="text-blue-700">All prices are in Indian Rupees (₹). Please contact us for bulk discounts or special items not listed here.
           <br></br> *PC= 1 Piece
        </p>
      </div>
    </div>
  );
};

export default Pricing;