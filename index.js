// Create a function that generates a random number to select from the word banks.
const rand = (size) => {
  result = Math.floor(Math.random() * size);
  return result;
};

//Create banks (arrays) of various parts of speech (words).

const animals = [
  "muskrat",
  "platypus",
  "jellyfish",
  "kitten",
  "barnacle",
  "turkey",
  "sea monkey",
];
const watchers = [
  "Board of Directors",
  "New York Knicks",
  "Easter Bunny",
  "Eye of Mordor",
  "Spongebob",
  "Super Cool Guy",
];
const verbs = ["kiss", "eat", "explode", "fight"];
const exclamations = [
  "Gadzooks!",
  "Eureka!",
  "Splendiferous!",
  "Well I'll be gosh-darned!",
];
const monikers = ["Zachary", "Jeronimo", "Yeet", "Squidward", "Tiramisu"];
const body_parts = ["toenail", "knuckle", "face", "arm", "buttock", "elbow"];

// Store fillable stories
const story_maker = (
  animal1,
  animal2,
  body_part1,
  body_part2,
  moniker,
  watcher,
  exclamation
) => {
  let story = `A certain ${animal1} named ${moniker} loved to eat ${animal2}s, but could never get enough to eat, because the ${watcher} was always on the lookout. 
But one night, ${moniker} found a ${animal2}'s ${body_part1} that had been cast aside and forgotten.
"${exclamation}" shouted ${moniker} in a fit of joy. "A most wonderful specimen!"
The next day, wearing the ${body_part1}, ${moniker} the ${animal1} strolled into the pasture with the ${animal2}. 
Soon a little baby ${animal2} was following him about and was quickly led away to slaughter.
That evening the ${animal1} shuffled in with the flock of ${animal2}s. 
But it happened that the ${watcher} took a fancy for ${animal2} broth that very evening, and, picking up a knife, went to the flock. 
There the first he laid ${body_part2}s on and killed was the ${animal1}.`;
  return story;
};

let animal1 = animals[rand(animals.length)];
let animal2 = animals[rand(animals.length)];
let watcher = watchers[rand(watchers.length)];
let body_part1 = body_parts[rand(body_parts.length)];
let body_part2 = body_parts[rand(body_parts.length)];
let exclamation = exclamations[rand(exclamations.length)];
let moniker = monikers[rand(monikers.length)];

console.log(
  story_maker(
    animal1,
    animal2,
    body_part1,
    body_part2,
    moniker,
    watcher,
    exclamation
  )
);
