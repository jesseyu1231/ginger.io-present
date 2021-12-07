// const newLocal = "I feel"
// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["yes", "difinetly", "absolutely"],
  ["my grandma","my mom","my dad", "my friend","mom","dad","grandma","friend"],
  ["no", "not really", "nope"],
  [
    "acorn squash",
    "alfalfa sprout",
    "amaranth",
    "anise",
    "artichoke",
    "arugula",
    "asparagus",
    "aubergine",
    "azuki bean",
    "banana squash",
    "basil",
    "bean sprout",
    "beet",
    "black bean",
    "black-eyed pea",
    "bok choy",
    "borlotti bean",
    "broad beans",
    "broccoflower",
    "broccoli",
    "brussels sprout",
    "butternut squash",
    "cabbage",
    "calabrese",
    "caraway",
    "carrot",
    "cauliflower",
    "cayenne pepper",
    "celeriac",
    "celery",
    "chamomile",
    "chard",
    "chayote",
    "chickpea",
    "chives",
    "cilantro",
    "collard green",
    "corn",
    "corn salad",
    "courgette",
    "cucumber",
    "daikon",
    "delicata",
    "dill",
    "eggplant",
    "endive",
    "fennel",
    "fiddlehead",
    "frisee",
    "garlic",
    "gem squash",
    "ginger",
    "green bean",
    "green pepper",
    "habanero",
    "herbs and spice",
    "horseradish",
    "hubbard squash",
    "jalapeno",
    "jerusalem artichoke",
    "jicama",
    "kale",
    "kidney bean",
    "kohlrabi",
    "lavender",
    "leek ",
    "legume",
    "lemon grass",
    "lentils",
    "lettuce",
    "lima bean",
    "mamey",
    "mangetout",
    "marjoram",
    "mung bean",
    "mushroom",
    "mustard green",
    "navy bean",
    "new zealand spinach",
    "nopale",
    "okra",
    "onion",
    "oregano",
    "paprika",
    "parsley",
    "parsnip",
    "patty pan",
    "pea",
    "pinto bean",
    "potato",
    "pumpkin",
    "radicchio",
    "radish",
    "rhubarb",
    "rosemary",
    "runner bean",
    "rutabaga",
    "sage",
    "scallion",
    "shallot",
    "skirret",
    "snap pea",
    "soy bean",
    "spaghetti squash",
    "spinach",
    "squash",
    "sweet potato",
    "tabasco pepper",
    "taro",
    "tat soi",
    "thyme",
    "topinambur",
    "tubers",
    "turnip",
    "wasabi",
    "water chestnut",
    "watercress",
    "white radish",
    "yam",
    "zucchini"
  ],
  [
    "done"
  ],
  ["I feel"],
  ["private", "public"],
]

// Possible responses, in corresponding order

const replies = [
  ["Would you like to document your story?"],
  [
    "Think of a dish that you enjoyed in the past. Who made it?"
  ],
  [
    "Do you already know the recipe?"
  ],
  ["Don’t worry. We’ll work together to find out. First of all, what are the ingredients? Please hit ‘enter’ after each ingredient. Enter ‘done’ when finished."],
  ["Nice one! Anything else?",
  "Great! What else?",
  "Anything else?",
  "Keep it coming please.",
  "Great one."
  ],
  [
    "Thank you for your time and effort. Let's go back in time to the occasion you tasted it. How did you feel?"
  ],
  [
    "Thank you for taking the time to record this precious moment. Would you like to set the recipe private or public?"
  ],
  [
    "No problem. Wish the memory stay as tasty as the recipe!"
  ]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Happy holidays",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]