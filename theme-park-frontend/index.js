createSignUp()




let runGame = function(){
    renderAttractions()

    attUpgrades()

    let five = async function(){
        addCaroselMoney()
    }

    let walletUpdate = async function(){
        console.log("The money has been saved in the database")
        let moneyDisplay = document.querySelector('.money-display')
        let money = parseInt(moneyDisplay.innerHTML)
        updateWallet(currentUser, money)
    }

    

    let temp_button = document.createElement('button')

    temp_button.append("Purchase Carosel")

    temp_button.addEventListener("click", function(e){
        createCarosel()
    })

    document.body.append(temp_button)

    setInterval(five,5000)
    setInterval(walletUpdate,30000)
}