createSignUp()




let runGame = function(){
    renderAttractions()

    attUpgrades()

    let five = function(){
        console.log("5 second timer")
        addCaroselMoney()
    }
    

    let temp_button = document.createElement('button')

    temp_button.append("Purchase Carosel")

    temp_button.addEventListener("click", function(e){
        createCarosel()
    })

    document.body.append(temp_button)

    setInterval(five,5000)
}