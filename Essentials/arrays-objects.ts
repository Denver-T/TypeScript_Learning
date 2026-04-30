let hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, "max"];
users = [5, 5];
users = ["Max", "Ana"];

let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, -5];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Denver",
  age: 27,
  hobbies: ["movies", "basketball"],
  role: {
    description: "software engineer",
    id: 1,
  },
};

let val: {} = "some text";

let data: Record<string, number | string>;

data = {
  entry1: 5,
  entry2: "Hello",
};
