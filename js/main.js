
let addBtn = document.querySelector('.new-entry')

let expenseDetails = []
addBtn.addEventListener('click', function(e) {
    e.preventDefault()

    let date = document.querySelector('.input-date').value
    let description = document.querySelector('.input-description').value
    let type = document.querySelector('.input-type').value
    let amount = Number(document.querySelector('.input-amount').value)
   
    


    if(date == null && description == null && type == null && amount == null) {
        console.log(`Thay can't be left empty`)
    } else {
        let expense = JSON.parse(localStorage.getItem('expenseTracker'))

        if(expense == null) {
            let expenseitems = {
                date: date,
                description: description,
                type: type,
                amount: amount,
                id: Date.now()
            }
            expenseDetails.push(expenseitems);
            localStorage.setItem('expenseTracker', JSON.stringify(expenseDetails));
    
        } else {
            let newExpenseitems = {
                date: date,
                description: description,
                type: type,
                amount: amount,
                id: Date.now()
            }
            expenseDetails.push(newExpenseitems);
            localStorage.setItem('expenseTracker', JSON.stringify(expenseDetails));
            console.log(expenseDetails)

            

        }

        location.reload()

        
        
    }
    
})




//display functionality

function display () {
    let expensedisplay = JSON.parse(localStorage.getItem('expenseTracker'))

    expensedisplay.forEach((items) => {
        let tbody = document.createElement("tbody")

        tbody.innerHTML = `
            <tr class="expense-details"> 
                <td>${items.date} </td>
                <td>${items.description} </td>
                <td>${items.type} </td>
                <td>₦ ${items.amount} </td>
                <td>
                    <button type="button" class="delete-entry" onClick="del(${items.id})">&#10005</button>
                </td>
            </tr>
        `
        // console.log(tbody)
        document.getElementById('details').append(tbody)

    
    })
    
}
display()


function del(id) {
    expenseDetails = expenseDetails.filter((items) =>{
        console.log ('hello')

        return items.id != id
    })

    localStorage.setItem('expenseTracker', JSON.stringify(expenseDetails));
    display()
    location.reload()
}


////Calculating the total amount
function calc() {
    let total = JSON.parse(localStorage.getItem("expenseTracker"))
   

    return total.reduce((acc, item, i) =>{
        return acc += item.amount;
        
    },0)
}
console.log(calc())

let total = document.querySelector('span').textContent = `₦ ${calc()}`

// let incomes = JSON.parse(localStorage.getItem("expenseTracker"))
// console.log(incomes)
// let { income} = incomes.type
// console.log(income)


// function incalc() {
//     let incomed = JSON.parse(localStorage.getItem("expenseTracker"))
//     console.log(incomed)
//     let {type: {income, expense}} = incomed
//     console.log(income, expense)
//     // let type = document.querySelector('.input-type').value
//     // let income = type.income
//     // return (incomeTotal === income) {
//     //     console.log(type.income)
//     //     incomeTotal.map(acc  => {
//     //         return acc ++
//     //     },0)

//     //     console.log(incomeTotal)
        
        
//     // }

//     // function received(income) {
//     //     return income == (type.income)
//     // }

//     // return incomedetails.reduce((acc, item) => {
//     //     return acc += item.amount
//     // },0)
// }
// incalc()
// console.log(incalc())

let incomed = document.querySelector('.incomed').textContent = `₦ ${incalc()}`

function incalc() {
    let incomeTotal = JSON.parse(localStorage.getItem("expenseTracker"))
    let type = document.querySelector('.input-type').value
    let income = type.income
    if(incomeTotal === income) {
        console.log(type.income)
        incomeTotal.map(acc  => {
            return acc ++
        },0)
        
        return incomeTotal;
    }
}

let expensed = document.querySelector('.expense').textContent = `₦ ${incalc()}`



window.onload = function() {
    let getOnload = JSON.parse(localStorage.getItem("expenseTracker")) 

    if(getOnload != null) {
        localStorage.setItem("newExpenseTracker", JSON.stringify(getOnload))

        let expenseTrackerChecker = JSON.parse(localStorage.getItem("newExpenseTracker"))

        expenseTrackerChecker.forEach((item) => {
            expenseDetails.push(item)
        });

        localStorage.removeItem("newExpenseTracker")
    }
}