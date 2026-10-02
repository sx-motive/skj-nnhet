export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readingTime: number;
  body: string[];
  relatedProducts: string[];
};

export const articles: Article[] = [
  {
    slug: 'the-ultimate-peeling-guide',
    title: 'The ultimate peeling guide',
    excerpt:
      'Our uppermost skin layer has a cycle of 28 days. That means it renews itself approximately every month, and sometimes it needs a little help.',
    image: '/content/1.webp',
    date: '2026-09-12',
    readingTime: 5,
    body: [
      'Our uppermost skin layer has a cycle of 28 days. Dead cells move up to the surface and are shed, making space for fresh ones underneath. When the air gets cold and dry, this process slows down and skin starts to look dull.',
      'A gentle peeling speeds things up again. Physical exfoliants like fine pumice polish the surface, while enzymes from papaya or pineapple dissolve the bonds between dead cells. Both work well, as long as you do not overdo it.',
      'Once or twice a week is enough for most skin types. Always follow with a moisturizer, because freshly exfoliated skin loses water faster. If your skin stings or turns red, take a break for a week.',
      'In autumn we recommend switching from a daily acid toner to a weekly paste. Your barrier will thank you once the heating season starts.',
    ],
    relatedProducts: ['exfoliant-paste', 'facial-moisturizer'],
  },
  {
    slug: 'signature-treatments-at-home',
    title: 'Our signature treatments as in-home facials',
    excerpt:
      'Who says you need a special occasion for a facial treatment? Here is how to recreate our signature treatments in the comfort of your home.',
    image: '/content/14.webp',
    date: '2026-08-28',
    readingTime: 7,
    body: [
      'Who says you need a special occasion for a facial? Most of what happens in a treatment room can be done in your bathroom with a towel, warm water and twenty quiet minutes.',
      'Start with a double cleanse, then hold a warm, damp towel over your face for a minute. The warmth softens the skin and gets it ready for exfoliation.',
      'Apply the exfoliant paste with light circular movements and rinse. Follow with a thick layer of hydrating mask and use the waiting time to massage your neck and shoulders.',
      'Finish with a few drops of serum and a rich cream, pressed in rather than rubbed. Light a candle, skip the phone, and you have your own spa evening.',
    ],
    relatedProducts: ['evening-ritual-set', 'hydrating-mask'],
  },
  {
    slug: 'natural-sun-care',
    title: 'Natural sun care for healthy skin',
    excerpt:
      'Our body needs the sun’s high-energy UV light to produce healthy vitamin D. Find out how you can enjoy it without damaging your skin.',
    image: '/content/17.webp',
    date: '2026-07-04',
    readingTime: 4,
    body: [
      'Our body needs UV light to produce vitamin D, which supports bones, immunity and mood. Fifteen minutes of midday sun on bare arms is enough for most people in summer.',
      'Beyond that, protection matters. Mineral filters like zinc oxide sit on top of the skin and reflect light, and they are well tolerated even by sensitive skin.',
      'Antioxidants such as vitamin C and E support your sunscreen by neutralising free radicals. Apply serum in the morning, then sunscreen as the final step.',
      'After a day outside, cool the skin with a hydrating mask and skip exfoliation for a few days.',
    ],
    relatedProducts: ['cloudberry-serum', 'hydrating-mask'],
  },
  {
    slug: 'myth-night-care',
    title: 'Myth: Night care',
    excerpt:
      'Many myths surround the time of darkness between evening and morning. And so it is also the case in skincare.',
    image: '/content/15.webp',
    date: '2026-06-18',
    readingTime: 3,
    body: [
      'Does skin really need a separate night cream? The short answer is: not always, but it helps.',
      'At night skin loses more water and repairs itself more actively. A richer texture slows down water loss, and ingredients like bakuchiol or peptides have time to work without sunlight breaking them down.',
      'If your day cream is already rich enough and contains no sunscreen, you can use it at night too. If your skin feels tight in the morning, it is a sign that you need something heavier.',
    ],
    relatedProducts: ['night-repair-cream'],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
