function adding(a: number, b: number) {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// const logMsg = (msg: string) => {
//   console.log(msg);
// };

function performJob(cb: (msg: string) => void) {
  // ...
  cb("Job done!");
}

performJob(log);

type Users = {
  name: string;
  age: number;
  greet: () => string;
};

let user2: Users = {
  name: "Max",
  age: 59,
  greet() {
    console.log("Hello there!");
    return this.name;
  },
};
