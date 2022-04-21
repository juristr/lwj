export interface JokeModel {
  id: number;
  setup: string;
  punchline: string;
}

// create an array of 10 jokes
const JOKES: JokeModel[] = [
  {
    id: 1,
    setup: 'What did the cheese say when it looked in the mirror?',
    punchline: 'Hello-me (Halloumi)',
  },
  {
    id: 2,
    setup: 'What kind of cheese do you use to disguise a small horse?',
    punchline: 'Mask-a-pony (Mascarpone)',
  },
  {
    id: 3,
    setup: 'A kid threw a lump of cheddar at me',
    punchline: 'I thought ‘That’s not very mature’',
  },
  {
    id: 4,
    setup: 'What’s Forrest Gump’s password?',
    punchline: '1forrest1',
  },
  {
    id: 5,
    setup: 'What do you call a cow with no legs?',
    punchline: 'Ground beef',
  },
  {
    id: 6,
    setup: 'What do you call a cow with no legs?',
    punchline: 'Ground beef',
  },
  {
    id: 7,
    setup: 'What do you call a cow with no legs?',
    punchline: 'Ground beef',
  },
  {
    id: 8,
    setup: 'What do you call a cow with no legs?',
    punchline: 'Ground beef',
  },
  {
    id: 9,
    setup: 'What do you call a cow with no legs?',
    punchline: 'Ground beef',
  },
  {
    id: 10,
    setup: 'What do you call a cow with no legs?',
    punchline: 'Ground beef',
  },
];

// return a random joke from the jokes array
export function getRandomJoke(): JokeModel {
  const randomIndex = Math.floor(Math.random() * JOKES.length);

  console.log('showing random joke', randomIndex);
  return JOKES[randomIndex];
}
