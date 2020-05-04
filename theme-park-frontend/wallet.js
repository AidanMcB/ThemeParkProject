let createWallet = function(){
    fetch("http:localhost:3000/wallets/1")
        .then(function(response){
            return response.json()
        })
        .then(function(wallet){
            console.log(wallet)
        })
    //temporary local variable for money
    let money = 0
    //create wallet object and append it to the page
    // let walletContainer = document.createElement("div")
    let navbar = document.querySelector(".nav-bar")
    let moneyDisplay = document.createElement("p")
    moneyDisplay.setAttribute('class', 'money-display')
    moneyDisplay.innerText = `${money} dollars`

    navbar.append(moneyDisplay)

}