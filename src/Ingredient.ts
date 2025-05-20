import cutletImage from './assets/cutlet.png';
import cheeseImage from './assets/cheese.png';
import leavesImage from './assets/lettuce-leaves.png';
import baconImage from './assets/bacon.png';

export interface Ingredient {
    name: string;
    price?: number;
    image: string;
}

export const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: cutletImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: leavesImage},
    {name: 'Bacon', price: 60, image: baconImage},
];