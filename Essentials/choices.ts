// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// type MyNumber = number;
type Role = "admin" | "editor" | "guest" | "reader";
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

// let userRole: "admin" | "editor" | "guest" = "admin"; // 0 => Admin, 1 => Guest
let userRole: Role = "admin";

// ...

// userRole = "guest";

let possibleResult: [1 | -1, 1 | -1];

possibleResult = [1, -1];

function access(role: Role) {
  // ...
}
