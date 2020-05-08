
let gravitron_container = document.querySelectorAll('.attraction-div')[1]
let waterslide_container = document.querySelectorAll('.attraction-div')[2]
let rollercoaster_container = document.querySelectorAll('.attraction-div')[3]

// CAROSEL STUFF
let createCarosel = function() {
    let carosel_container = document.querySelectorAll('.attraction-div')[0]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if Carosel can be found
            let carosel = attractions.find(element => {return element.name === "Carosel" && element.user_id === currentUser.id})


            let moneyDisplay = document.querySelector('.money-display')
            let money = parseInt(moneyDisplay.innerHTML)

            if(money < carosel.price)
            {
                console.log("Cannot be purchased")
            }
            else{
            moneyDisplay.innerText = `${money - carosel.price} dollars`


            
            // If button is pressed the amount gets updated by 1
            carosel.amount += 1
            console.log("This is the carosel amount " + carosel.amount)

            // carosel_container.append(`Purchased: ${carosel.amount}`)

            saveToDatabase(carosel)
            }

    })
}

let showCaroselAmount = function(){
    let carosel_container = document.querySelectorAll('.attraction-div')[0]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if Carosel can be found
            let carosel = attractions.find(element => {return element.name === "Carosel" && element.user_id === currentUser.id})

            //Fix later lol
            carosel_container.append(`Purchased: ${carosel.amount}`)
            carosel_container.append(`Price: ${carosel.price}`)
    })
}


let addCaroselMoney = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let carosel = attractions.find(element => {return element.name === "Carosel" && element.user_id === currentUser.id})


        addToWallet(currentUser,(carosel.revenue * carosel.amount))
    })
}


let caroselUpgrade = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let carosel = attractions.find(element => {return element.name === "Carosel" && element.user_id === currentUser.id})


        purchaseUpgrade(carosel)

        changeRevenue(carosel,2)
        
    })
}


////////////////////////////////////


let renderAttractions = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        console.log("This is render")

        //PUT IMAGES IN ITS OWN CONTAINER TO RENDER AT A TIME
        //SO I CAN CLEAR WITH document.imgContainer.innerHTML = ''

        //AND THEN RERENDER WITH THIS CODE SO THERE ARE NO DUPLICATES
        console.log(attractions)

        attractions.forEach(attraction => {
        let attContainer = document.createElement("div")
        let attName = document.createElement("h2")
        attName.innerText = attraction.name
        attContainer.append(attName)
        document.body.append(attContainer)
        })
})
}

let saveToDatabase = function(attraction){
    fetch(`http://localhost:3000/attractions/${attraction.id}`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            amount: attraction.amount,
            price: (attraction.price * 2),
            revenue: attraction.revenue
        })
    })

    console.log("I Patched")


}

let assignAllAttractions = async function(){
    
    fetch(`http://localhost:3000/attractions`,{
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
    .then(fetch(`http://localhost:3000/attractions`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Gravitron",
            amount: 0,
            revenue: 5,
            wait_time: 10,
            user_id: currentUser,
            price: 100
        })
    }))
    .then(fetch(`http://localhost:3000/attractions`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Waterslide",
            amount: 0,
            revenue: 20,
            wait_time: 10,
            user_id: currentUser,
            price: 500
        })

    }))
    .then(fetch(`http://localhost:3000/attractions`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Rollercoaster",
            amount: 0,
            revenue: 50,
            wait_time: 10,
            user_id: currentUser,
            price: 2000
        })
    }))

}

let changeRevenue = function(attraction, amount){

    let a = attraction.revenue * amount
    fetch(`http://localhost:3000/attractions/${attraction.id}`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: attraction.name,
            revenue: a,
            wait_time: attraction.wait_time,
            amount: attraction.amount,
            user_id: attraction.user_id,
            price: attraction.price
        })
    })

    console.log(`${attraction.name} is now making ${a}`)


}