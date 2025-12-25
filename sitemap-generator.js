const Sitemap = require('react-router-sitemap').default;

// Define your routes as an array of path strings
const routes = [
  '/',
  '/our-company',
  '/our-commitment',
  '/road-freight',
  '/express-delivery',
  '/storage-warehouse',
  '/faq',
  '/contact-us'
];

// Replace 'https://www.yourwebsite.com' with your actual domain
const hostname = 'https://www.dkk-transport.com';

// Create the sitemap
const sitemap = new Sitemap(routes)
  .build(hostname)
  .save('./sitemap.xml');

console.log('Sitemap generated successfully!');