let gS = ""
let gC = ""
let getPage = function(){

        //create the gameScreen and gameContainer tags 
        gS = document.createElement('div')
        gS.setAttribute('class', 'game-screen')
        gC = document.createElement('div')
        gC.setAttribute('class', 'game-container')

        //create page elements
        //header
        let header = document.createElement("header")
        header.setAttribute('class', 'header')
        header.innerText = "Alien Theme Park"

        //footer
        let footer = document.createElement("div")
        let footerP = document.createElement("p")
        footerP.setAttribute('class', 'footer-p')
        footerP.innerText = "footer p tag text"
        footer.setAttribute('class', 'footer')
        footer.append(footerP)
        
        //button
        //let btn = document.querySelector('.the-button')

        //picture
        let picture = document.createElement("img")
        picture.setAttribute('class', 'picture')
        picture.src = "assets/themeParkPhoto1.png"

        //attractionList
        let attractionList = document.createElement("div")
        attractionList.setAttribute('class', 'attraction-list')
        let attraction = document.createElement("p")
        attraction.innerText = "Attraction"
        let attractionQt = document.createElement("p")
        attractionQt.innerText = "number of attractions"
        let attractionUpgrade = document.createElement("p")
        attractionUpgrade.innerText = "attraction upgrade"

    //add picture to the gameScreen
    gS.append(picture)
    //attraction
    attractionList.append(attraction)
    attractionList.append(attractionQt)
    attractionList.append(attractionUpgrade)

    //append header, game Screen, Attractions, and footer
    document.body.append(header)
    document.body.append(gS)
    document.body.append(attractionList)
    document.body.append(footer)




    
    //append the gameScreen to the game Container
    // gC.append(gS)
    // document.body.append(gC)
    
    //add attractionList + footer to gameContainer
    // gC.append(attractionList)
    // gC.append(footer)

}