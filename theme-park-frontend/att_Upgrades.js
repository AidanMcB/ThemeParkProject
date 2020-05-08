let assignAllAttUpgrades = function(){
    fetch(`http://localhost:3000/attraction_upgrades`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Carosel",
            amount: 0,
            revenue: 2,
            wait_time: 10,
            user_id: currentUser,
            price: 25
        })
    })
}