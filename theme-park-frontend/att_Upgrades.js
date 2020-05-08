let assignAllAttUpgrades = function(){

    // First fetch is for the carosel
    fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Carosel",
            flavor_text: "Congrats! You're an Idling Pro... A Professional Time Waster",
            revenue_multiplier: 2,
            "purchased": false,
            user_id: currentUser.id,
            price: 100
        })
    })
}


let purchaseUpgrade = function(attraction){

    let moneyDisplay = document.querySelector('.money-display')
    let money = parseInt(moneyDisplay.innerHTML)

    fetch(`http://localhost:3000/attraction_upgrades`)
        .then(function(response){
            return response.json()
        })
        .then(function(upgrades){
            
            let a = upgrades.forEach(upgrade => {
                if 
                console.log(upgrade)
            })
            console.log(`${attraction.name} should equal Carosel`)
            console.log(a)
            console.log(upgrades)
        })

    fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "purchased": true
        })
    })
}