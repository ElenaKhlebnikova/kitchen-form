import {
  faBan,
  faBanSmoking,
  faBlender,
  faCarrot,
  faCat,
  faChildren,
  faCow,
  faLeaf,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';

export const DAYS = [
  {
    day: 'Mon',
    number: 0,
  },

  {
    day: 'Tue',
    number: 1,
  },
  {
    day: 'Wed',
    number: 2,
  },
  {
    day: 'Thu',
    number: 3,
  },
  {
    day: 'Fri',
    number: 4,
  },
  {
    day: 'Sat',
    number: 5,
  },
  {
    day: 'Sun',
    number: 6,
  },
];

export const HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

export const RULES = [
  {
    id: 'no_smoking',
    name: 'No Smoking',
    description: 'Smoking is not permitted in the kitchen',
    icon: faBanSmoking,
  },
  {
    id: 'vegan_food_only',
    name: 'Only vegan food',
    icon: faLeaf,
    description:
      'This kitchen is dedicated to vegan cooking, all food prepared should be plant-based with no animal products.',
  },
  {
    id: 'vegeterian_food_only',
    icon: faCarrot,
    name: 'Only vegetarian food',
    description: 'The kitchen accommodates only vegetarian cooking, meaning no meat but dairy and eggs are allowed',
  },
  {
    id: 'no_outside_appliances',
    icon: faBlender,
    name: 'No Outside Appliances',
    description:
      'To maintain the consistency and safety of the kitchen equipment, guests are not allowed to bring their own appliances.',
  },
  {
    id: 'no_pets',
    icon: faCat,
    name: 'No Pets',
    description: 'For cleanliness or allergy considerations, pets are not allowed in the kitchen area.',
  },
  {
    id: 'no_alcohol',
    icon: faWineGlass,
    name: 'No alcohol',
    description: 'This kitchen maintains an alcohol-free environment, so no alcoholic beverages are allowed.',
  },
  {
    id: 'no_children',
    icon: faChildren,
    name: 'No Children',
    description: ' Guests are not allowed to bring their own children, either for safety reasons or others.',
  },
  {
    id: 'no_beef',
    icon: faCow,
    name: 'No Beef',
    description:
      'Respecting certain dietary restrictions and personal beliefs, no beef is allowed to be prepared in this kitchen.',
  },
  {
    id: 'no_pork',
    icon: faBan,
    name: 'No Pork',
    description: 'Given dietary or religious preferences, this kitchen does not permit the preparation of pork.',
  },
];

export const FEATURES = [
  {
    name: 'Large countertops',
    id: 'large_countertops',
    description: 'Plenty of countertop space for easy meal prep and better organization of kitchen appliances.',
  },
  {
    name: 'Island counter',
    id: 'island_counter',
    description: 'A useful addition in the center of your kitchen for extra workspace or an informal dining setup.',
  },
  {
    name: 'Induction stove',
    id: 'induction-stove',
    description: 'An induction stove brings speed and control to your cooking with its magnetic heating method.',
  },
  {
    name: 'Double oven',
    id: 'double_oven',
    description:
      'A double oven offers flexibility, letting you cook multiple dishes at different temperatures at the same time.',
  },
  {
    name: 'Grill',
    id: 'grill',
    description:
      'A grill in your kitchen allows for a variety of cooking methods, ideal for those who love BBQ flavors.',
  },
  {
    name: 'Baking equipment',
    id: 'baking_equipment',
    description: 'Equipped with essentials for baking, your kitchen is ready to handle cookies, cakes, pies, and more.',
  },
  {
    name: 'Dish washer',
    id: 'dish_washer',
    description: 'A dishwasher helps automate cleaning up after meals, saving time and effort.',
  },
  {
    name: 'Dining area',
    id: 'dining_area',
    description: 'A designated area for eating makes meal times more organized and enjoyable.',
  },
  {
    name: 'Balcony',
    id: 'balcony',
    description: 'An accessible balcony can provide an open-air dining option or additional ventilation.',
  },

  {
    name: 'Accessible',
    id: 'accessible',
    description:
      'If your kitchen has features that make it user-friendly for people with mobility issues, it can broaden your guest audience.',
  },

  {
    name: 'Outdoor kitchen',
    id: 'outdoor_kitchen',
    description:
      'An outdoor kitchen setup expands your cooking space and allows for unique outdoor dining experiences.',
  },

  {
    name: 'Scenic view',
    id: 'scenic_view',
    description:
      'If your kitchen offers attractive natural or urban views, it can make the cooking experience more enjoyable.',
  },

  {
    name: 'Natural light',
    id: 'natural_light',
    description:
      'Kitchens with good natural light can create a more pleasant and visually appealing cooking environment.',
  },
];

export const LANGUAGES = [
  'German',
  'English',
  'Turkish',
  'Polish',
  'Arabic',
  'Russian',
  'French',
  'Spanish',
  'Italian',
  'Ukrainian',
  'Japanese',
  'Chinese',
];


