import Category from '../models/Category';

export const CATEGORIES = [
  new Category('c1', 'Aperitivos', '#f5428d', require('../images/Appertizers.jpeg')),
  new Category('c2', 'Sopas & Ensaladas', '#f54242', require('../images/tacosalad.jpg')),
  new Category('c3', 'Enchiladas & Amigos', '#f5a442', require('../images/enchiladas.jpg')),
  new Category('c4', 'Fajitas', '#f5d142', require('../images/fajitas2.jpeg')),
  new Category('c5', 'Platillos', '#368dff', require('../images/platillos.jpg')),
  new Category('c6', 'Especialidades', '#41d95d', require('../images/esp.jpg')),
  // new Category('c7', 'Lunch Specials', '#9eecff', require('../images/lunch.jpg')),
  // new Category('c8', 'Vegetariano', '#b9ffb0', require('../images/veg.jpg')),
  // new Category('c9', 'Buenos Dias', '#ffc7ff', require('../images/breakfast.jpg')),
  // new Category('c10', 'Postres', '#47fced', require('../images/desert.jpeg'))
];