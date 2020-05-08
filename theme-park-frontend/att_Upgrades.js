let attUpgrades = function(attraction){
    fetch('http://localhost:3000/attraction_upgrades')
        .then(function(response){
            return response.json()
        })
        .then(function(attUpgrades){
            console.log(attUpgrades)
        })
}