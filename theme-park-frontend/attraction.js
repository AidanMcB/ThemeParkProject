

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

let createGravitron = function() {
    let gravitron_container = document.querySelectorAll('.attraction-div')[1]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if gravitron can be found
            let gravitron = attractions.find(element => {return element.name === "Gravitron" && element.user_id === currentUser.id})


            let moneyDisplay = document.querySelector('.money-display')
            let money = parseInt(moneyDisplay.innerHTML)

            if(money < gravitron.price)
            {
                console.log("Cannot be purchased")
            }
            else{
            moneyDisplay.innerText = `${money - gravitron.price} dollars`


            
            // If button is pressed the amount gets updated by 1
            gravitron.amount += 1
            console.log("This is the gravitron amount " + gravitron.amount)

            // gravitron_container.append(`Purchased: ${gravitron.amount}`)

            saveToDatabase(gravitron)
            }

    })
}

let showGravitronAmount = function(){
    let gravitron_container = document.querySelectorAll('.attraction-div')[0]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if gravitron can be found
            let gravitron = attractions.find(element => {return element.name === "Gravitron" && element.user_id === currentUser.id})

            //Fix later lol
            gravitron_container.append(`Purchased: ${gravitron.amount}`)
            gravitron_container.append(`Price: ${gravitron.price}`)
    })
}


let addGravitronMoney = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let gravitron = attractions.find(element => {return element.name === "Gravitron" && element.user_id === currentUser.id})


        addToWallet(currentUser,(gravitron.revenue * gravitron.amount))
    })
}


let gravitronUpgrade = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let gravitron = attractions.find(element => {return element.name === "Gravitron" && element.user_id === currentUser.id})


        purchaseUpgrade(gravitron)

        changeRevenue(gravitron,2)
        
    })
}

///////////////////////////////////

let createwaterslide = function() {
    let waterslide_container = document.querySelectorAll('.attraction-div')[1]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if waterslide can be found
            let waterslide = attractions.find(element => {return element.name === "Waterslide" && element.user_id === currentUser.id})


            let moneyDisplay = document.querySelector('.money-display')
            let money = parseInt(moneyDisplay.innerHTML)

            if(money < waterslide.price)
            {
                console.log("Cannot be purchased")
            }
            else{
            moneyDisplay.innerText = `${money - waterslide.price} dollars`


            
            // If button is pressed the amount gets updated by 1
            waterslide.amount += 1
            console.log("This is the waterslide amount " + waterslide.amount)

            // waterslide_container.append(`Purchased: ${waterslide.amount}`)

            saveToDatabase(waterslide)
            }

    })
}

let showWaterslideAmount = function(){
    let waterslide_container = document.querySelectorAll('.attraction-div')[0]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if waterslide can be found
            let waterslide = attractions.find(element => {return element.name === "Waterslide" && element.user_id === currentUser.id})

            //Fix later lol
            waterslide_container.append(`Purchased: ${waterslide.amount}`)
            waterslide_container.append(`Price: ${waterslide.price}`)
    })
}


let addWaterslideMoney = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let waterslide = attractions.find(element => {return element.name === "Waterslide" && element.user_id === currentUser.id})


        addToWallet(currentUser,(waterslide.revenue * waterslide.amount))
    })
}


let waterslideUpgrade = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let waterslide = attractions.find(element => {return element.name === "Waterslide" && element.user_id === currentUser.id})


        purchaseUpgrade(waterslide)

        changeRevenue(waterslide,2)
        
    })
}
////////
let createrollercoaster = function() {
    let rollercoaster_container = document.querySelectorAll('.attraction-div')[1]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if rollercoaster can be found
            let rollercoaster = attractions.find(element => {return element.name === "Rollercoaster" && element.user_id === currentUser.id})


            let moneyDisplay = document.querySelector('.money-display')
            let money = parseInt(moneyDisplay.innerHTML)

            if(money < rollercoaster.price)
            {
                console.log("Cannot be purchased")
            }
            else{
            moneyDisplay.innerText = `${money - rollercoaster.price} dollars`


            
            // If button is pressed the amount gets updated by 1
            rollercoaster.amount += 1
            console.log("This is the rollercoaster amount " + rollercoaster.amount)

            // rollercoaster_container.append(`Purchased: ${rollercoaster.amount}`)

            saveToDatabase(rollercoaster)
            }

    })
}

let showrollercoasterAmount = function(){
    let rollercoaster_container = document.querySelectorAll('.attraction-div')[0]
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if rollercoaster can be found
            let rollercoaster = attractions.find(element => {return element.name === "Rollercoaster" && element.user_id === currentUser.id})

            //Fix later lol
            rollercoaster_container.append(`Purchased: ${rollercoaster.amount}`)
            rollercoaster_container.append(`Price: ${rollercoaster.price}`)
    })
}


let addrollercoasterMoney = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let rollercoaster = attractions.find(element => {return element.name === "Rollercoaster" && element.user_id === currentUser.id})


        addToWallet(currentUser,(rollercoaster.revenue * rollercoaster.amount))
    })
}


let rollercoasterUpgrade = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let rollercoaster = attractions.find(element => {return element.name === "Rollercoaster" && element.user_id === currentUser.id})


        purchaseUpgrade(rollercoaster)

        changeRevenue(rollercoaster,2)
        
    })
}





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
    .then(()=> fetch(`http://localhost:3000/attractions`,{
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
    .then(()=>fetch(`http://localhost:3000/attractions`,{
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
    .then(()=>fetch(`http://localhost:3000/attractions`,{
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