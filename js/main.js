
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

        
        
    }
    
})

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

//display functionality

let expensedisplay = JSON.parse(localStorage.getItem('expenseTracker'))

expensedisplay.forEach((items) => {
    let tbody = document.createElement("tbody")

    tbody.innerHTML = `
        <tr> 
            <td>${items.date} </td>
            <td>${items.description} </td>
            <td>${items.type} </td>
            <td>${items.amount} </td>
            <td>
                <button type="button" class="delete-entry" onClick="del()">&#10005</button>
            </td>
        </tr>
    `
    // console.log(tbody)
    document.getElementById('details').append(tbody)

   
})
// let delBtn = document.querySelector('.delete-entry')

// delBtn.addEventListener('click', function(e) {
//     e.preventDefault()

//     console.log('deleted')
// })

function del() {
    console.log('deleted')
}


function calc() {
    let total = JSON.parse(localStorage.getItem("expenseTracker"))

    return total.reduce((acc, item, i) =>{
        // let income = i
        // // return acc += item.amount;
        // if (acc === income) {
        //     acc += item.amount
        // } else if (acc === expense) {
        //     acc -= item.amount
        // }

        return acc += item.amount;
        
    },0)
}
console.log(calc())

let total = document.querySelector('span').textContent = calc()



