// TODO 1
function createAccount(customer) {
    if ((customer.firstName === '') || (customer.lastName === '') || (customer.initialDeposit <= 50)) {
        return "Failed to create account"
    }
    else {
        let accountCounter = 1000000000
        let customerAccount = {}
        accountCounter += 1
        let accountNumber = accountCounter
        let firstName = customer.firstName
        let lastName = customer.lastName
        let balance = customer.initialDeposit
        let createdAt = new Date().toISOString()
        return customerAccount = { accountNumber, firstName, lastName, balance, createdAt }
    }
}
let customer1 = {
    firstName: "John",
    lastName: "Doe",
    initialDeposit: 100
}
let customer2 = {
    firstName: "Zyad",
    lastName: "Wael",
    initialDeposit: 40
}
let account1 = createAccount(customer1)
let account2 = createAccount(customer2)

console.log("Account 1:", account1)
console.log("Account 2:", account2)

// TODO 2

function depositMoney(account, value) {
    if (value <= 0) {
        return "Please enter right amount"
    }
    else {
        // let customerAccount = {}
        account.balance += value
        let transaction = {
            type: "Deposit",
            amount: value,
            date: new Date().toISOString(),
            newBalance: account.balance
        }
        account.transactions.push(transaction)
        return account
    }

}
let account = {
    accountNumber: "1000000001",
    balance: 100,
    transactions: []
}
console.log("Deposit 1:", depositMoney(account, -5))
console.log("Deposit 2:", depositMoney(account, 500))
console.log("Deposit 3:", depositMoney(account, 1000))

// TODO 3

function withdrawProcess(accountW, amount) {
    let accountNumber = accountW.accountNumber
    let balance = accountW.balance

    if (amount > accountW.balance) {

        balance -= 5
        let penaltyTransaction = {
            type: "OVERDRAFT_ATTEMPT",
            amount: amount,
            date: new Date().toISOString(),
            penalty: 5
        }
        let penaltyTransactions = []
        penaltyTransactions.push(penaltyTransaction)

        return accountW = { accountNumber, balance, penaltyTransactions }
    }
    else {

        accountW.balance -= amount
        let transaction = {
            type: "WITHDRAWAL",
            amount: amount,
            date: new Date().toISOString(),
            newBalance: accountW.balance
        }
        accountW.transactions.push(transaction)

        return accountW
    }
}
let accountW = {
    accountNumber: "1000000001",
    balance: 100,
    transactions: []
}


console.log("Withdrawal :", withdrawProcess(accountW, 50))
console.log("Overdraft attempt:", withdrawProcess(accountW, 200))

// TODO 4

function transferMoney(fromAccount, toAccount, amount) {
    const fromAccountNumber = fromAccount.accountNumber
    const toAccountNumber = toAccount.accountNumber
    if (!fromAccount || !toAccount || amount > fromAccount.balance || amount <= 0) {
        return "Failed to transfer money"
    } else {
        let fromTransactions = []
        let toTransactions = []
        let fromBalance = fromAccount.balance
        let toBalance = toAccount.balance
        fromBalance -= amount
        toBalance += amount
        let fromTransaction = {
            type: "TRANSFER_OUT",
            to: toAccount.accountNumber.toString(),
            amount: amount,
            date: new Date().toISOString()
        }
        let toTransaction = {
            type: "TRANSFER_IN",
            from: fromAccount.accountNumber.toString(),
            amount: amount,
            date: new Date().toISOString()
        }
        fromTransactions.push(fromTransaction)
        toTransactions.push(toTransaction)
        return [
            fromAccount = { fromAccountNumber, fromBalance, fromTransaction }, toAccount = { toAccountNumber, toBalance, toTransaction }
        ]
    }



}
let fromAccount = {
    accountNumber: "1000000001",
    balance: 100
}
let toAccount = {
    accountNumber: "1000000002",
    balance: 200
}

console.log("Transferred Money Process :", transferMoney(fromAccount, toAccount, 75))



// TODO 5

function calcInterest(account) {
    if (account.balance <= 500) {
        return console.log("Interests not available");

    } else {
        account.transactions = []
        let beforeAmount = account.balance
        account.balance *= (1 + 0.00167)
        delete account.type
        let afterAmount = account.balance
        let transaction = {
            type: "INTEREST",
            amount: afterAmount - beforeAmount,
            date: new Date().toISOString()
        }
        account.transactions.push(transaction)
        return account
    }


}
let savingAccount = {
    accountNumber: "1000000001",
    balance: 1000,
    type: "SAVINGS"
}
console.log("The ~ calcInterest:", calcInterest(savingAccount))

// TODO 6

function retrieveTransaction(account, targetRange) {
    let transactionsRetrieved = []
    for (let i = 0; i < account.transactions.length; i++) {
        if ((account.transactions[i].type === targetRange.type)
            &&
            (targetRange.endDate > account.transactions[i].date)
            &&
            (account.transactions[i].date > targetRange.startDate)) {
            transactionsRetrieved.push(account.transactions[i])
            transactionsRetrieved.sort((a, b) => (new Date(b.date) - new Date(a.date)))
        }
    }
    return transactionsRetrieved
}

let targetRange = {
    startDate: "2023-11-01",
    endDate: "2023-11-30",
    type: "WITHDRAWAL"
}
let accountR = {
    transactions: [
        { type: "DEPOSIT", amount: 200, date: "2023-11-15T10:00:00Z" },
        { type: "WITHDRAWAL", amount: 50, date: "2023-11-20T14:00:00Z" },
        { type: "WITHDRAWAL", amount: 60, date: "2023-11-05T14:00:00Z" },
        { type: "WITHDRAWAL", amount: 580, date: "2023-11-29T14:00:00Z" },
        { type: "WITHDRAWAL", amount: 506, date: "2023-12-20T14:00:00Z" },
        { type: "WITHDRAWAL", amount: 70, date: "2023-10-20T14:00:00Z" },
        { type: "WITHDRAWAL", amount: 880, date: "2023-11-11T14:00:00Z" }

    ]
}
console.log("The Retrieved Transaction :", retrieveTransaction(accountR, targetRange))

// TODO 7

function manageAccount(account, order, password) {
    account.statusHistory = []

    if (password === "manager123" && order === "FREEZE" && account.status === "ACTIVE") {
        account.status = "FROZEN"
        let process = {
            action: order,
            by: password,
            date: new Date().toISOString()
        }
        account.statusHistory.push(process)

    }
    else if (password === "manager123" && order === "UNFREEZE" && account.status === "FROZEN") {
        account.status = "ACTIVE"
        let process = {
            action: order,
            by: password,
            date: new Date().toISOString()
        }
        account.statusHistory.push(process)

    }

    return account

}
let accountF = {
    accountNumber: "1000000001",
    status: "ACTIVE"
}
let accountUF = {
    accountNumber: "1000000002",
    status: "FROZEN"
}
console.log("The Managed Account 1 :", manageAccount(accountF, "FREEZE", "manager123"))
console.log("The Managed Account 2 :", manageAccount(accountUF, "UNFREEZE", "manager123"))

// TODO 8
function enforceLimit(account, amount) {

    let dateTodayFull = new Date().toISOString()
    let dateToday = dateTodayFull.slice(0, 10)
    let count = 0
    for (let i = 0; i < account.transactions.length; i++) {
        let fullDate = account.transactions[i].date
        let dateAccount = fullDate.slice(0, 10)
        if ((account.transactions[i].type === "WITHDRAWAL") &&
            (dateAccount === dateToday)) {
            count += account.transactions[i].amount
        }
    }
    count += amount
    if (count > 500) {
        return "Error: Daily withdrawal limit exceeded ($500 max)"
    } else {

        account.balance -= amount
        let transaction = {
            type: "WITHDRAWAL",
            amount: amount,
            date: dateTodayFull,
            newBalance: account.balance
        }
        account.transactions.push(transaction)
        return account
    }
}

let accountE = {
    accountNumber: "1000000001",
    balance: 750,
    transactions: [
        {
            type: "WITHDRAWAL",
            amount: 250,
            date: "2023-11-15T09:00:00Z"
        }
    ]
}

console.log("The Enforce Limit : ", enforceLimit(accountE, 300))

// TODO 9

function validatePassword(password) {
    let reasons = []
    let common = ["password", "123456", "123456789", "abc123", "password123", "111111"]
    if (password.length < 12) {
        reasons.push("Password must be at least 12 characters")
    }
    if (!/[0-9]/.test(password)) {
        reasons.push("Password must has at least one digit")
    }
    if (!/[a-z]/.test(password)) {
        reasons.push("Password must has lowercase letters")
    }
    if (!/[A-Z]/.test(password)) {
        reasons.push("Password must has uppercase letters")
    }
    if (!/[!@#$%^&*(),.?":{}|<>_\-+=~`]/.test(password)) {
        reasons.push("Password must has at least one special character")
    }
    if (common.includes(password.toLowerCase())) {
        reasons.push("Password is too common")
    }
    if (reasons.length === 0) {
        return { valid: true }
    } else {
        return {
            valid: false,
            reasons: reasons
        }

    }


}

console.log("The ValidatePassword : ", validatePassword("BankAccount123!"))


// TODO 10

function checkForSuspiciousActivity(account) {
    let alerts = []
    let transactions = account.transactions.slice().sort((a, b) => (new Date(a.date) - new Date(b.date)))
    for (let t of transactions) {
        if (t.amount > 10000) {
            alerts.push(`High-value transaction: ${t.amount} transfer`)
        }
    }

    for (let i = 0; i < transactions.length; i++) {
        let count = 1
        let startTime = new Date(transactions[i].date)

        for (let j = i+1; j < transactions.length; j++) {
            let nextTime = new Date(transactions[j].date)
            let diffMinutes = (nextTime - startTime) / (1000 * 60)

            if (diffMinutes <= 5) {
                count++
                if (count >= 3) {
                    alerts.push(`Rapid withdrawals: ${count} transactions within ${Math.ceil(diffMinutes)} minutes`)
                }
            }
        }

    }
    return {
        isSuspicious: alerts.length > 0,
        alerts: alerts
    }
}


let accountZ = {
    accountNumber: "1000000009",
    balance: 9000,
    transactions: [
        { type: "WITHDRAWAL", amount: 300, date: "2023-11-15T10:00:00Z" },
        { type: "WITHDRAWAL", amount: 300, date: "2023-11-15T10:02:00Z" },
        { type: "WITHDRAWAL", amount: 300, date: "2023-11-15T10:04:00Z" },
        { type: "TRANSFER_OUT", amount: 15000, date: "2023-11-15T09:00:00Z" }
    ]
}


console.log("The Check For Suspicious Activity : ", checkForSuspiciousActivity(accountZ))