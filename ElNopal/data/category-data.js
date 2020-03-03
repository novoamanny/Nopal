import Category from '../models/Category';

export const CATEGORIES = [
  new Category('c1', 'Aperitivos', '#f5428d', require('../images/Appertizers.jpeg')),
  new Category('c2', 'Sopas & Ensaladas', '#f54242', require('../images/Appertizers.jpeg')),
  new Category('c3', 'Enchiladas & Amigos', '#f5a442', require('../images/Appertizers.jpeg')),
  new Category('c4', 'Fajitas', '#f5d142', require('../images/Appertizers.jpeg')),
  new Category('c5', 'Platillos', '#368dff', require('../images/Appertizers.jpeg')),
  new Category('c6', 'Especialidades', '#41d95d', require('../images/Appertizers.jpeg')),
  new Category('c7', 'Lunch Specials', '#9eecff', require('../images/Appertizers.jpeg')),
  new Category('c8', 'Vegetariano', '#b9ffb0', require('../images/Appertizers.jpeg')),
  new Category('c9', 'Buenos Dias', '#ffc7ff', require('../images/Appertizers.jpeg')),
  new Category('c10', 'Postres', '#47fced', require('../images/Appertizers.jpeg'))
];