// This does not specify the order of items in the array
// const user: (string | number)[] = [1, "gh"]

// Tuple is an array with a specific order of items in an array
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [555, 515, 22]

type User = [number, string]

const newUser: User = [554, "example@email.com"]

// This sets all of the array at index of 1 to that. This is a bad practice
newUser[1] = "hc.com"
// Be aware taht push methods can still  happen despite it not already being defiend. This is bad practice
// newUser.push(true)









export {}