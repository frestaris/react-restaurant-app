import pizzaPicMenu from "../assets/Menus/pizza-pic-menu.webp";
import entreesPicMenu from "../assets/Menus/entrees-pic-menu.webp";
import saladsPicMenu from "../assets/Menus/salads-pic-menu.webp";
import mainPicMenu from "../assets/Menus/main-pic-menu.webp";
import drinksPicMenu from "../assets/Menus/drinks-pic-menu.webp";
import dessertPicMenu from "../assets/Menus/dessert-pic-menu.webp";
import specialsPicMenu from "../assets/Menus/specials-pic-menu.webp";

const menuData = [
  {
    id: 1,
    title: "Pizzas",
    icon: pizzaPicMenu,
    content: {
      1: {
        name: "Margherita",
        ingredients: ["Tomato Sauce", "Fresh Mozzarella", "Basil", "Olive Oil"],
        price: 10.99,
      },
      2: {
        name: "Pepperoni",
        ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
        price: 12.99,
      },
      3: {
        name: "Vegetarian",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Bell Peppers",
          "Onions",
          "Olives",
        ],
        price: 11.99,
      },
      4: {
        name: "BBQ Chicken",
        ingredients: ["BBQ Sauce", "Grilled Chicken", "Red Onions", "Cilantro"],
        price: 13.99,
      },
      5: {
        name: "Hawaiian",
        ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
        price: 12.49,
      },
      6: {
        name: "Meat Lovers",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Pepperoni",
          "Sausage",
          "Bacon",
        ],
        price: 14.99,
      },
      7: {
        name: "Buffalo Chicken",
        ingredients: [
          "Buffalo Sauce",
          "Grilled Chicken",
          "Blue Cheese",
          "Celery",
        ],
        price: 13.49,
      },
      8: {
        name: "Pesto Veggie",
        ingredients: [
          "Pesto Sauce",
          "Mozzarella",
          "Spinach",
          "Artichokes",
          "Sun-dried Tomatoes",
        ],
        price: 12.99,
      },
      9: {
        name: "Four Cheese",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Parmesan",
          "Gorgonzola",
          "Ricotta",
        ],
        price: 13.49,
      },
      10: {
        name: "Taco Pizza",
        ingredients: [
          "Taco Sauce",
          "Ground Beef",
          "Cheddar Cheese",
          "Lettuce",
          "Tomatoes",
          "Sour Cream",
        ],
        price: 14.49,
      },
    },
  },
  {
    id: 2,
    title: "Entrees",
    icon: entreesPicMenu,
    content: {
      1: {
        name: "California Roll",
        ingredients: ["Crab Meat", "Avocado", "Cucumber"],
        price: 8.99,
      },
      2: {
        name: "Spicy Tuna Roll",
        ingredients: ["Spicy Tuna", "Cucumber", "Avocado"],
        price: 9.99,
      },
      3: {
        name: "Salmon Nigiri",
        ingredients: ["Salmon", "Rice", "Wasabi"],
        price: 6.99,
      },
      4: {
        name: "Shrimp Tempura",
        ingredients: ["Shrimp", "Tempura Batter", "Dipping Sauce"],
        price: 10.99,
      },
      5: {
        name: "Beef Teriyaki",
        ingredients: ["Grilled Beef", "Teriyaki Sauce", "Rice", "Vegetables"],
        price: 12.99,
      },
      6: {
        name: "Chicken Katsu",
        ingredients: ["Breaded Chicken", "Katsu Sauce", "Rice", "Cabbage"],
        price: 11.49,
      },
      7: {
        name: "Vegetable Stir Fry",
        ingredients: ["Mixed Vegetables", "Soy Sauce", "Rice"],
        price: 9.49,
      },
      8: {
        name: "Pork Gyoza",
        ingredients: ["Pork Dumplings", "Soy Sauce", "Green Onions"],
        price: 7.99,
      },
      9: {
        name: "Seafood Ramen",
        ingredients: ["Noodles", "Shrimp", "Squid", "Broth", "Egg"],
        price: 13.99,
      },
      10: {
        name: "Miso Soup",
        ingredients: ["Miso Paste", "Tofu", "Seaweed", "Green Onions"],
        price: 4.99,
      },
    },
  },
  {
    id: 3,
    title: "Salads",
    icon: saladsPicMenu,
    content: {
      1: {
        name: "Caesar Salad",
        ingredients: [
          "Romaine Lettuce",
          "Caesar Dressing",
          "Croutons",
          "Parmesan Cheese",
        ],
        price: 9.99,
      },
      2: {
        name: "Greek Salad",
        ingredients: [
          "Mixed Greens",
          "Feta Cheese",
          "Olives",
          "Tomato",
          "Cucumber",
          "Red Onion",
          "Greek Dressing",
        ],
        price: 10.49,
      },
      3: {
        name: "Garden Salad",
        ingredients: [
          "Mixed Greens",
          "Tomatoes",
          "Cucumbers",
          "Carrots",
          "Balsamic Vinaigrette",
        ],
        price: 8.99,
      },
      4: {
        name: "Cobb Salad",
        ingredients: [
          "Romaine Lettuce",
          "Grilled Chicken",
          "Bacon",
          "Hard-Boiled Eggs",
          "Avocado",
          "Blue Cheese",
          "Ranch Dressing",
        ],
        price: 12.99,
      },
      5: {
        name: "Caprese Salad",
        ingredients: [
          "Fresh Mozzarella",
          "Tomatoes",
          "Basil",
          "Olive Oil",
          "Balsamic Reduction",
        ],
        price: 11.49,
      },
      6: {
        name: "Quinoa Salad",
        ingredients: [
          "Quinoa",
          "Black Beans",
          "Corn",
          "Bell Peppers",
          "Lime Dressing",
        ],
        price: 10.99,
      },
      7: {
        name: "Asian Chicken Salad",
        ingredients: [
          "Mixed Greens",
          "Grilled Chicken",
          "Mandarin Oranges",
          "Almonds",
          "Sesame Dressing",
        ],
        price: 11.99,
      },
      8: {
        name: "Spinach Salad",
        ingredients: [
          "Fresh Spinach",
          "Strawberries",
          "Feta Cheese",
          "Candied Pecans",
          "Balsamic Vinaigrette",
        ],
        price: 10.49,
      },
      9: {
        name: "Beet Salad",
        ingredients: [
          "Mixed Greens",
          "Roasted Beets",
          "Goat Cheese",
          "Walnuts",
          "Honey Vinaigrette",
        ],
        price: 10.99,
      },
      10: {
        name: "Tuna Salad",
        ingredients: [
          "Mixed Greens",
          "Tuna",
          "Cherry Tomatoes",
          "Cucumbers",
          "Red Onion",
          "Lemon Vinaigrette",
        ],
        price: 12.49,
      },
    },
  },
  {
    id: 4,
    title: "Main",
    icon: mainPicMenu,
    content: {
      1: {
        name: "Classic Cheeseburger",
        ingredients: [
          "Beef Patty",
          "Cheddar Cheese",
          "Lettuce",
          "Tomato",
          "Onion",
        ],
        price: 11.49,
      },
      2: {
        name: "Bacon Burger",
        ingredients: ["Beef Patty", "Bacon", "Lettuce", "Tomato", "BBQ Sauce"],
        price: 12.49,
      },
      3: {
        name: "Veggie Burger",
        ingredients: ["Black Bean Patty", "Lettuce", "Tomato", "Avocado"],
        price: 10.49,
      },
      4: {
        name: "BBQ Chicken Sandwich",
        ingredients: ["Grilled Chicken", "BBQ Sauce", "Coleslaw", "Pickles"],
        price: 10.99,
      },
      5: {
        name: "Fish Tacos",
        ingredients: [
          "Grilled Fish",
          "Cabbage Slaw",
          "Chipotle Sauce",
          "Corn Tortillas",
        ],
        price: 11.99,
      },
      6: {
        name: "Philly Cheese Steak",
        ingredients: [
          "Thinly Sliced Beef",
          "Bell Peppers",
          "Onions",
          "Provolone Cheese",
          "Hoagie Roll",
        ],
        price: 12.99,
      },
      7: {
        name: "Pasta Primavera",
        ingredients: [
          "Pasta",
          "Seasonal Vegetables",
          "Olive Oil",
          "Parmesan Cheese",
        ],
        price: 10.99,
      },
      8: {
        name: "Chicken Alfredo",
        ingredients: [
          "Fettuccine",
          "Grilled Chicken",
          "Alfredo Sauce",
          "Parmesan Cheese",
        ],
        price: 12.49,
      },
      9: {
        name: "Mushroom Risotto",
        ingredients: [
          "Arborio Rice",
          "Mushrooms",
          "Vegetable Broth",
          "Parmesan Cheese",
        ],
        price: 11.49,
      },
      10: {
        name: "Steak Frites",
        ingredients: ["Grilled Steak", "French Fries", "Garlic Butter"],
        price: 19.99,
      },
    },
  },
  {
    id: 5,
    title: "Drinks",
    icon: drinksPicMenu,
    content: {
      1: {
        name: "Classic Lemonade",
        ingredients: ["Lemon Juice", "Water", "Sugar"],
        price: 3.99,
      },
      2: {
        name: "Iced Tea",
        ingredients: ["Black Tea", "Ice", "Lemon", "Mint"],
        price: 2.99,
      },
      3: {
        name: "Mango Smoothie",
        ingredients: ["Mango", "Yogurt", "Honey", "Ice"],
        price: 4.99,
      },
      4: {
        name: "Sparkling Water",
        ingredients: ["Carbonated Water", "Lemon Slice"],
        price: 2.49,
      },
      5: {
        name: "Coca-Cola",
        ingredients: [
          "Carbonated Water",
          "High Fructose Corn Syrup",
          "Caffeine",
        ],
        price: 1.99,
      },
      6: {
        name: "Orange Juice",
        ingredients: ["Fresh Oranges"],
        price: 3.49,
      },
      7: {
        name: "Hot Chocolate",
        ingredients: ["Milk", "Cocoa Powder", "Sugar", "Whipped Cream"],
        price: 3.99,
      },
      8: {
        name: "Coffee",
        ingredients: ["Coffee Beans", "Water", "Milk", "Sugar"],
        price: 2.49,
      },
      9: {
        name: "Fruit Punch",
        ingredients: ["Fruit Juices", "Soda", "Fresh Fruits"],
        price: 4.49,
      },
      10: {
        name: "Beer",
        ingredients: ["Barley", "Water", "Hops", "Yeast"],
        price: 5.99,
      },
    },
  },
  {
    id: 6,
    title: "Desserts",
    icon: dessertPicMenu,
    content: {
      1: {
        name: "Chocolate Cake",
        ingredients: ["Chocolate", "Flour", "Sugar", "Eggs", "Butter"],
        price: 4.99,
      },
      2: {
        name: "Cheesecake",
        ingredients: ["Cream Cheese", "Sugar", "Graham Cracker Crust", "Eggs"],
        price: 5.49,
      },
      3: {
        name: "Tiramisu",
        ingredients: ["Coffee", "Mascarpone", "Ladyfingers", "Cocoa Powder"],
        price: 6.99,
      },
      4: {
        name: "Apple Pie",
        ingredients: ["Apples", "Sugar", "Cinnamon", "Pie Crust"],
        price: 4.49,
      },
      5: {
        name: "Brownie Sundae",
        ingredients: [
          "Brownie",
          "Ice Cream",
          "Chocolate Sauce",
          "Whipped Cream",
        ],
        price: 5.99,
      },
      6: {
        name: "Panna Cotta",
        ingredients: ["Cream", "Sugar", "Gelatin", "Vanilla"],
        price: 5.49,
      },
      7: {
        name: "Ice Cream Sundae",
        ingredients: ["Ice Cream", "Chocolate Sauce", "Sprinkles", "Cherry"],
        price: 4.99,
      },
      8: {
        name: "Fruit Tart",
        ingredients: ["Pastry Crust", "Custard", "Fresh Fruit", "Gelatin"],
        price: 6.49,
      },
      9: {
        name: "Lemon Meringue Pie",
        ingredients: ["Lemon Juice", "Sugar", "Egg Whites", "Pie Crust"],
        price: 5.99,
      },
      10: {
        name: "Baklava",
        ingredients: ["Phyllo Dough", "Nuts", "Honey", "Butter"],
        price: 3.99,
      },
    },
  },
  {
    id: 7,
    title: "Specials",
    icon: specialsPicMenu,
    content: {
      1: {
        name: "Lobster Tail",
        ingredients: ["Lobster", "Garlic Butter", "Lemon"],
        price: 29.99,
      },
      2: {
        name: "Surf and Turf",
        ingredients: ["Steak", "Lobster", "Garlic Butter", "Asparagus"],
        price: 39.99,
      },
      3: {
        name: "BBQ Ribs",
        ingredients: ["Pork Ribs", "BBQ Sauce", "Coleslaw"],
        price: 24.99,
      },
      4: {
        name: "Shrimp Scampi",
        ingredients: ["Shrimp", "Garlic", "Butter", "Pasta"],
        price: 18.99,
      },
      5: {
        name: "Filet Mignon",
        ingredients: [
          "Beef Tenderloin",
          "Garlic Mashed Potatoes",
          "Vegetables",
        ],
        price: 34.99,
      },
      6: {
        name: "Stuffed Bell Peppers",
        ingredients: ["Bell Peppers", "Ground Turkey", "Rice", "Cheese"],
        price: 15.99,
      },
      7: {
        name: "Seafood Paella",
        ingredients: ["Rice", "Shrimp", "Mussels", "Saffron", "Peas"],
        price: 22.99,
      },
      8: {
        name: "Chicken Marsala",
        ingredients: ["Chicken Breast", "Mushrooms", "Marsala Wine", "Pasta"],
        price: 17.99,
      },
      9: {
        name: "Vegetarian Lasagna",
        ingredients: [
          "Lasagna Noodles",
          "Ricotta",
          "Spinach",
          "Marinara Sauce",
        ],
        price: 14.99,
      },
      10: {
        name: "Beef Tacos",
        ingredients: [
          "Ground Beef",
          "Taco Shells",
          "Lettuce",
          "Tomato",
          "Cheese",
        ],
        price: 12.99,
      },
    },
  },
];

export default menuData;
