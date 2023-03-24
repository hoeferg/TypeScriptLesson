interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

// This is reopening of the interface
interface User {
    githubToken: string
}

interface AnotherInterface {
    logginPermisson: boolean
}

interface Admin extends User, AnotherInterface {
    role: "admin" | "ta" | "learner"
}

const gayle: Admin = {
    dbId:22, email: "h@h.com", 
    userId: 2221, 
    role: "admin",
    logginPermisson: true,
    githubToken: "github",
    startTrial: () => {return "trial started"},
    getCoupon: (name: "gayle10", off: 10 ) => {return 10}
}
gayle.email = "g@gh.com"

// gayle.dbId = 54