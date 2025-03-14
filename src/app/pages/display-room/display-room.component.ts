import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface FoodItem {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

@Component({
  selector: 'app-display-room',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './display-room.component.html',
  styleUrls: ['./display-room.component.scss'],
})
export class DisplayRoomComponent {
  faArrowRight = faArrowRight;

  title = 'Food photo for Culinary Artists';
  subtitle = 'to make their products more stand out';
  description =
    'Professional food photography that highlights the texture, colors, and presentation of culinary creations. Perfect for menus, websites, and social media.';

  foodItems: FoodItem[] = [
    {
      id: 1,
      name: 'Gourmet Burger',
      description: 'Premium beef patty with artisanal toppings',
      imageUrl:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 2,
      name: 'Deluxe Burger Stack',
      description: 'Triple-layered burger with special sauce',
      imageUrl:
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 3,
      name: 'Artisan Burger',
      description: 'Handcrafted burger with premium ingredients',
      imageUrl:
        'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1769&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 4,
      name: 'French Fries',
      description: 'Crispy golden fries with sea salt',
      imageUrl:
        'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1925&auto=format&fit=crop',
      category: 'Side Dish',
    },
    {
      id: 5,
      name: 'Presentation Board',
      description: 'Wooden serving board for food presentation',
      imageUrl:
        'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1971&auto=format&fit=crop',
      category: 'Props',
    },
    {
      id: 6,
      name: 'Gourmet Burger Deluxe',
      description: 'Premium burger with all the fixings',
      imageUrl:
        'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1915&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with ganache topping',
      imageUrl:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1789&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 8,
      name: 'Strawberry Pancakes',
      description: 'Fluffy pancakes with fresh strawberries and maple syrup',
      imageUrl:
        'https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop',
      category: 'Breakfast',
    },
    {
      id: 9,
      name: 'Strawberry Pancakes',
      description: 'Fluffy pancakes with fresh strawberries and maple syrup',
      imageUrl:
        'https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop',
      category: 'Breakfast',
    },
    {
      id: 10,
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta with creamy egg sauce and pancetta',
      imageUrl:
        'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1971&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 11,
      name: 'Margherita Pizza',
      description: 'Traditional pizza with tomato sauce, mozzarella, and basil',
      imageUrl:
        'https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=1974&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 12,
      name: 'Sushi Platter',
      description: 'Assorted fresh sushi and sashimi',
      imageUrl:
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1970&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 13,
      name: 'Fruit Smoothie Bowl',
      description:
        'Colorful smoothie bowl topped with fresh fruits and granola',
      imageUrl:
        'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1898&auto=format&fit=crop',
      category: 'Breakfast',
    },
    {
      id: 14,
      name: 'Chocolate Truffles',
      description: 'Handmade chocolate truffles with cocoa dusting',
      imageUrl:
        'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1976&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 15,
      name: 'Grilled Steak',
      description: 'Perfectly seared steak with herb butter',
      imageUrl:
        'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1931&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 16,
      name: 'Seafood Paella',
      description: 'Traditional Spanish rice dish with assorted seafood',
      imageUrl:
        'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 17,
      name: 'Macarons',
      description: 'Colorful French macarons with various fillings',
      imageUrl:
        'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1970&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 18,
      name: 'Caprese Salad',
      description: 'Fresh tomatoes, mozzarella, and basil with balsamic glaze',
      imageUrl:
        'https://images.unsplash.com/photo-1592417817098-8fd3d58e71e9?q=80&w=1974&auto=format&fit=crop',
      category: 'Appetizer',
    },
    {
      id: 19,
      name: 'Eggs Benedict',
      description: 'Poached eggs on English muffin with hollandaise sauce',
      imageUrl:
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1974&auto=format&fit=crop',
      category: 'Breakfast',
    },
    {
      id: 20,
      name: 'Ramen Bowl',
      description:
        'Authentic Japanese ramen with chashu pork and soft-boiled egg',
      imageUrl:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1980&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 21,
      name: 'Charcuterie Board',
      description: 'Assorted cured meats, cheeses, and accompaniments',
      imageUrl:
        'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1974&auto=format&fit=crop',
      category: 'Appetizer',
    },
    {
      id: 22,
      name: 'Tiramisu',
      description:
        'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
      imageUrl:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 23,
      name: 'Vegetable Curry',
      description: 'Aromatic curry with seasonal vegetables and basmati rice',
      imageUrl:
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 24,
      name: 'Croissants',
      description: 'Freshly baked buttery croissants',
      imageUrl:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop',
      category: 'Breakfast',
    },
    {
      id: 25,
      name: 'Lobster Dinner',
      description: 'Grilled lobster with herb butter and lemon',
      imageUrl:
        'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1974&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 26,
      name: 'Ice Cream Sundae',
      description: 'Gourmet ice cream with toppings and wafer',
      imageUrl:
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1827&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 27,
      name: 'Roast Chicken',
      description: 'Herb-roasted whole chicken with vegetables',
      imageUrl:
        'https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=1974&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 28,
      name: 'Mushroom Risotto',
      description: 'Creamy Italian rice dish with wild mushrooms and parmesan',
      imageUrl:
        'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 29,
      name: 'Blueberry Cheesecake',
      description: 'Creamy cheesecake with blueberry compote',
      imageUrl:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1770&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 30,
      name: 'Blueberry Cheesecake',
      description: 'Creamy cheesecake with blueberry compote',
      imageUrl:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1770&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 31,
      name: 'Tacos',
      description: 'Street-style tacos with various fillings and toppings',
      imageUrl:
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1780&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 32,
      name: 'Poke Bowl',
      description: 'Hawaiian-inspired bowl with raw fish, rice, and vegetables',
      imageUrl:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 33,
      name: 'Chocolate Fondue',
      description: 'Melted chocolate with assorted dippables',
      imageUrl:
        'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1964&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 34,
      name: 'Beef Wellington',
      description: 'Tenderloin wrapped in puff pastry with mushroom duxelles',
      imageUrl:
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1770&auto=format&fit=crop',
      category: 'Main Course',
    },
    {
      id: 35,
      name: 'Fruit Tart',
      description:
        'Buttery pastry shell filled with custard and topped with fresh fruits',
      imageUrl:
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop',
      category: 'Dessert',
    },
    {
      id: 36,
      name: 'Craft Cocktail',
      description: 'Artisanal cocktail with premium spirits and garnishes',
      imageUrl:
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1972&auto=format&fit=crop',
      category: 'Beverage',
    },
  ];
  
}
