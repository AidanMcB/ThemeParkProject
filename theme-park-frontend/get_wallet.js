let getWallet = function(currentUser){
    
    //will reference the wallet of the current user
    //currently hardcoded to user wallet 1
    fetch(`http:localhost:3000/wallets`)
        .then(function(response){
            return response.json()
        })
        .then(function(wallets){
            console.log(wallets)
           let wallet = wallets.find(wallet => currentUser.id == wallet.user_id)
           
    //temporary local variable for money
    let money = wallet.money
    //create wallet object and append it to the page
    // let walletContainer = document.createElement("div")
    let navbar = document.querySelector(".nav-bar")

    let moneyDisplay = document.createElement("p")
    moneyDisplay.setAttribute('class', 'money-display')
    moneyDisplay.innerText = `${money} dollars`

    navbar.append(moneyDisplay)
    })
}


let addToWallet = function(value){ //callback will reference 
    fetch(`http:localhost:3000/wallets/${currentUser.id}`)
        .then(function(response){
            return response.json()
        })
        .then(function(wallet){
            
            let money = wallet.money + value
            let moneyDisplay = document.querySelector('.money-display')
            moneyDisplay.innerText = `${money} dollars`

            updateWallet(money)
        })
}

let updateWallet = function(currentUser,value){
    fetch(`http://localhost:3000/wallets/${currentUser.id}`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            money: value
        })
    })

    console.log("Wallet Updated")
}