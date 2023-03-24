let score: number | string = 33

score = 44
score= "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let gayle: User | Admin = { username: "gayle", id:555}

gayle = {username: "gh", id: 555}

// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    
}

//ARRAY

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
// This means that it can be all strings or all numbers. Not both
const data3: number[] | string[] = [1, 2, 3]
// This allows both strings and number in an array
const data4: (number | string)[] = [1, "2", 3]

// let pi: 3.14 = 3.14
// pi = 3.145

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"