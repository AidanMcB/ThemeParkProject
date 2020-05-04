let createWallet = function(){
    fetch("https:localhost:3000/wallet")
        .then(function(response){
            return response.json()
        })
        .then(function(wallet){
            console.log(wallet)
        })
    //temporary local variable for money
    let money = 0
    //create wallet object and append it to the page
    let walletContainer = document.createElement("div")
    let moneyDisplay = document.createElement("p")
    moneyDisplay.innerText = `${money} dollars`


    walletContainer.append(moneyDisplay)
    document.body.append(walletContainer)

}