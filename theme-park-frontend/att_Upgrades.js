let assignAllAttUpgrades = function(){

    // First fetch is for the carosel
    fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Carosel",
            flavor_text: "Congrats! You're an Idling Pro... A Professional Time Waster",
            revenue_multiplier: 2,
            "purchased?": false,
            user_id: currentUser.id,
            price: 100
        })
    })

    .then(()=>fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Gravitron",
            flavor_text: "ITS A UFO",
            revenue_multiplier: 2,
            "purchased?": false,
            user_id: currentUser.id,
            price: 100
        })
    }))

    .then(()=>fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Waterslide",
            flavor_text: "Why a waterslide? Shut up thats why...",
            revenue_multiplier: 2,
            "purchased?": false,
            user_id: currentUser.id,
            price: 100
        })
    }))


    .then(()=>fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Rollercoaster",
            flavor_text: "Even has the loopdey loop",
            revenue_multiplier: 2,
            "purchased?": false,
            user_id: currentUser.id,
            price: 100
        })
    }))
}


let purchaseUpgrade = function(attraction){

    let moneyDisplay = document.querySelector('.money-display')
    let money = parseInt(moneyDisplay.innerHTML)

    fetch(`http://localhost:3000/attraction_upgrades`)
        .then(function(response){
            return response.json()
        })
        .then(function(upgrades){
            let a = {}
            upgrades.forEach(upgrade => {
                
                if(upgrade.user_id == currentUser.id && upgrade.name == attraction.name){
                    a = upgrade
                }
                
                
            })
            console.log(a)
            if (money < a.price){
                console.log("You're broke")
            }
            else if(a["purchased?"] == true){
                console.log("This has already been purchased.")
            }
            else{
                console.log(a.price)
                moneyDisplay.innerText = `${money - a.price} dollars`

                fetch(`http://localhost:3000/attraction_upgrades/${a.id}`,{
                    method: "PATCH",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        "purchased?": true
                    })
                })
            }

        })


}