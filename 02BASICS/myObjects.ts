const User = {
    name: "gayle",
    Enumerator: "email@email.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "g", isPaid: false, email: "a@a.com"}

createUser(newUser)



// an object is returning an object
// function name : expected return : return logic
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price:399}
}

export {}