let createCarosel = function() {
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            // Testing function to see if Carosel can be found
            console.log(attractions.find(element => {return element.name == "Carosel"}))
            let carosel = attractions.find(element => {return element.name === "Carosel"})

            // If button is pressed the amount gets updated by 1
            carosel.amount += 1
            console.log("This is the carosel amount " + carosel.amount)

            saveToDatabase(carosel)

        

        

            

    })
}

let addCaroselMoney = function(){
    fetch('http://localhost:3000/attractions')
    .then(function(response){
        return response.json()
    })
    .then(function(attractions){
        let carosel = attractions.find(element => {return element.name === "Carosel"})


        addToWallet(currentUser,carosel.revenue)
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
            amount: attraction.amount
        })
    })
    console.log("I Patched")


}