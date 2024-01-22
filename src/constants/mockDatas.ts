export interface categoryTypes {
  name: string;
  id: number;
}

export interface wasteTypes {
  category: string;
  types: Array<categoryTypes>;
}
export const API_KEY = '65abe9cad95c9083141329gza1fb474';
export const geocode_url = (long: number, lat: number) =>
  `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=${API_KEY}`;
export const wasteCategory: Array<wasteTypes> = [
  {
    category: 'Pet Bottles',
    types: [
      {name: 'Transparent PET Bottles', id: 1},
      {name: 'Green PET Bottles', id: 2},
      {name: 'Other Colored PET Bottles', id: 3},
      {name: 'Mixed PET Bottles', id: 4},
    ],
  },
  {
    category: 'Nylon',
    types: [
      {name: 'Food Nylon', id: 5},
      {name: 'Pure Water Nylon', id: 6},
      {name: 'Package Nylon', id: 7},
      {name: 'Other Nylon types', id: 8},
    ],
  },
  {
    category: 'Paper',
    types: [
      {name: 'News Paper', id: 9},
      {name: 'Food Waste Paper', id: 10},
      {name: 'Books Paper', id: 12},
      {name: 'Other Paper types', id: 11},
    ],
  },
  {
    category: 'Bag',
    types: [
      {name: 'Womens Bag', id: 13},
      {name: 'Mens Bag', id: 16},
      {name: 'Childrens Bag', id: 14},
      {name: 'Other Bag types', id: 15},
    ],
  },
  {
    category: 'Can',
    types: [
      {name: 'Soft Drink Can', id: 20},
      {name: 'Beer Cans', id: 17},
      {name: 'Food Cans', id: 18},
      {name: 'Other Can types', id: 19},
    ],
  },
  {
    category: 'Cartons',
    types: [
      {name: 'Gadgets Cartons', id: 24},
      {name: 'food Cartons', id: 25},
      {name: 'Drinks Cartons', id: 26},
      {name: 'Other Cartons types', id: 27},
    ],
  },
  {
    category: 'Plastic',
    types: [
      {name: 'Gadgets Plastic', id: 20},
      {name: 'food Plastic', id: 21},
      {name: 'Drink Plastics', id: 22},
      {name: 'Other Plastic types', id: 29},
    ],
  },
];
