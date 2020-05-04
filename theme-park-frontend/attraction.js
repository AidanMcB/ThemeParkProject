let createAttraction = function() {
    fetch('http://localhost:3000/attractions')
        .then(function(response){
            return response.json()
        })
        .then(function(attractions){
            console.log(attractions)
            //iterate through each attraction 
        attractions.forEach( attraction => {
            //create a div and h2 
        let attContainer = document.createElement("div")
        let attName = document.createElement("h2")
        attName.innerText = attraction.name
        attContainer.append(attName)
        document.body.append(attContainer)
        })
    })
}