export type Category = 'face' | 'body' | 'sets';

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  volume: string;
  tagline: string;
  description: string;
  ingredients: string[];
  howToUse: string;
  image: string;
  lifestyle: string;
  tint: string;
  bestseller?: boolean;
  isNew?: boolean;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'face', label: 'Face' },
  { id: 'body', label: 'Body' },
  { id: 'sets', label: 'Sets' },
];

const BOTTLE = '/products/product-1.webp';
const JAR = '/products/product-2.webp';
const TUBE = '/products/product-3.webp';

export const products: Product[] = [
  {
    slug: 'facial-moisturizer',
    name: 'Facial Moisturizer',
    category: 'face',
    price: 52,
    volume: '350 ml',
    tagline: 'Atlantic cedar daily moisture',
    description:
      'A light, fast-absorbing moisturizer that keeps skin soft through cold mornings and dry office air. Cedar and birch sap calm redness while squalane locks in hydration without a greasy finish.',
    ingredients: ['Birch sap', 'Atlantic cedar oil', 'Squalane', 'Niacinamide', 'Oat extract'],
    howToUse:
      'Pump twice into your palms, warm between your hands and press into clean skin morning and night.',
    image: BOTTLE,
    lifestyle: '/content/0.webp',
    tint: '#d9cfc2',
    bestseller: true,
  },
  {
    slug: 'hydrating-mask',
    name: 'Hydrating Mask',
    category: 'face',
    price: 48,
    volume: '120 ml',
    tagline: 'Chamomile overnight recovery',
    description:
      'A cushiony gel-cream mask for the evenings when your skin feels tight. Chamomile and hyaluronic acid flood the skin with moisture, so you wake up with a plump, rested look.',
    ingredients: ['Chamomile water', 'Hyaluronic acid', 'Panthenol', 'Cloudberry seed oil'],
    howToUse:
      'Apply a generous layer to clean skin two or three times a week. Leave on for 15 minutes or overnight.',
    image: JAR,
    lifestyle: '/content/16.webp',
    tint: '#cdbfae',
    bestseller: true,
  },
  {
    slug: 'exfoliant-paste',
    name: 'Exfoliant Paste',
    category: 'face',
    price: 36,
    volume: '75 ml',
    tagline: 'Atlantic leaf gentle polish',
    description:
      'Fine volcanic pumice and fruit enzymes lift away dull skin without scratching. Kelp extract keeps the skin barrier comfortable, even if you exfoliate in winter.',
    ingredients: ['Volcanic pumice', 'Papaya enzyme', 'Kelp extract', 'Glycerin'],
    howToUse:
      'Massage a small amount onto damp skin in circular motions for 30 seconds, then rinse. Use once or twice a week.',
    image: TUBE,
    lifestyle: '/content/9.webp',
    tint: '#c9c3b4',
    bestseller: true,
  },
  {
    slug: 'cloudberry-serum',
    name: 'Cloudberry Serum',
    category: 'face',
    price: 64,
    volume: '200 ml',
    tagline: 'Vitamin C brightening serum',
    description:
      'Arctic cloudberry is rich in vitamin C and omega oils. This serum evens out tone after a long winter and gives tired skin back its glow.',
    ingredients: ['Cloudberry extract', 'Ascorbyl glucoside', 'Ferulic acid', 'Aloe vera'],
    howToUse: 'Smooth two pumps over face and neck in the morning before moisturizer.',
    image: BOTTLE,
    lifestyle: '/content/2.webp',
    tint: '#e0cbb5',
    isNew: true,
  },
  {
    slug: 'night-repair-cream',
    name: 'Night Repair Cream',
    category: 'face',
    price: 58,
    volume: '100 ml',
    tagline: 'Rich cream for long nights',
    description:
      'A dense, comforting cream that works while you sleep. Bakuchiol supports renewal the way retinol does, without the irritation.',
    ingredients: ['Bakuchiol', 'Shea butter', 'Ceramides', 'Sea buckthorn oil'],
    howToUse: 'Warm a pea-sized amount between fingertips and press into skin as the last step at night.',
    image: JAR,
    lifestyle: '/content/13.webp',
    tint: '#bfb3a5',
  },
  {
    slug: 'cedar-body-lotion',
    name: 'Cedar Body Lotion',
    category: 'body',
    price: 42,
    volume: '350 ml',
    tagline: 'Woody everyday body lotion',
    description:
      'A silky lotion with a quiet scent of cedar and sea air. It sinks in quickly, so you can get dressed right after.',
    ingredients: ['Cedarwood oil', 'Sunflower oil', 'Urea 5%', 'Allantoin'],
    howToUse: 'Apply all over the body after showering, while the skin is still slightly damp.',
    image: BOTTLE,
    lifestyle: '/content/6.webp',
    tint: '#cbbfa9',
    bestseller: true,
  },
  {
    slug: 'sea-salt-scrub',
    name: 'Sea Salt Scrub',
    category: 'body',
    price: 38,
    volume: '250 ml',
    tagline: 'Mineral body polish',
    description:
      'Norwegian sea salt in a cold-pressed oil base. It removes rough patches on elbows and knees and leaves a light film of oil behind.',
    ingredients: ['Sea salt', 'Rapeseed oil', 'Vitamin E', 'Juniper oil'],
    howToUse: 'Massage over wet skin in the shower, focusing on dry areas, then rinse.',
    image: JAR,
    lifestyle: '/content/18.webp',
    tint: '#c2c5c2',
  },
  {
    slug: 'pine-hand-cream',
    name: 'Pine Hand Cream',
    category: 'body',
    price: 24,
    volume: '75 ml',
    tagline: 'Protective hand balm',
    description:
      'A small tube that lives in your coat pocket. Pine resin and beeswax protect hands from wind and frost.',
    ingredients: ['Pine resin', 'Beeswax', 'Lanolin', 'Calendula'],
    howToUse: 'Massage into hands and cuticles whenever they feel dry.',
    image: TUBE,
    lifestyle: '/content/11.webp',
    tint: '#b9bba8',
    isNew: true,
  },
  {
    slug: 'arctic-body-butter',
    name: 'Arctic Body Butter',
    category: 'body',
    price: 46,
    volume: '200 ml',
    tagline: 'Deep nourishment for dry skin',
    description:
      'Whipped shea and cocoa butter for skin that needs more than a lotion. Melts on contact and stays comfortable for the whole day.',
    ingredients: ['Shea butter', 'Cocoa butter', 'Lingonberry seed oil', 'Oat lipids'],
    howToUse: 'Scoop a little and warm it in your hands before massaging into the body.',
    image: JAR,
    lifestyle: '/content/1.webp',
    tint: '#d3c4b9',
  },
  {
    slug: 'morning-ritual-set',
    name: 'Morning Ritual Set',
    category: 'sets',
    price: 120,
    volume: '3 products',
    tagline: 'Serum, moisturizer and hand cream',
    description:
      'Our three favorites for the morning routine in one recyclable box. A good place to start, or a gift for someone who never buys skincare for themselves.',
    ingredients: ['Cloudberry Serum', 'Facial Moisturizer', 'Pine Hand Cream'],
    howToUse: 'Serum first, then moisturizer. Keep the hand cream in your bag.',
    image: BOTTLE,
    lifestyle: '/content/15.webp',
    tint: '#d6c6b0',
    isNew: true,
  },
  {
    slug: 'evening-ritual-set',
    name: 'Evening Ritual Set',
    category: 'sets',
    price: 132,
    volume: '3 products',
    tagline: 'Exfoliant, mask and night cream',
    description:
      'Everything for a slow evening at home: polish, mask and a rich cream to finish. Comes with a linen headband.',
    ingredients: ['Exfoliant Paste', 'Hydrating Mask', 'Night Repair Cream'],
    howToUse: 'Exfoliate, apply the mask for 15 minutes, rinse and finish with the night cream.',
    image: JAR,
    lifestyle: '/content/17.webp',
    tint: '#c7b8aa',
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(value);
