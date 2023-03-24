// const User = {
//     name: "gayle",
//     Enumerator: "email@email.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "g  ", isPaid: false, email: "a@a.com"}

// createUser(newUser) 



// // an object is returning an object
// // function name : expected return : return logic
// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price:399}
// }
// type alisas
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;

// }



// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number
}

let myUser: User =  {
    _id: '123',
    name: 'h',
    email:"g@g",
    isActive: false,
}

type cardNum = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNum & cardDate & {
    cvv: number
}

myUser.email = "g@g.com"
// myUser._id = "asa"

export {}