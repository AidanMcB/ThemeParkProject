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
        
        let attractionDiv = document.createElement("div")
        attractionDiv.setAttribute('class', 'attraction-div')
        
        //add picture to the gameScreen
        gS.append(picture)
        gC.append(gS)
        //attraction
        attractionList.append(attraction)
        attractionList.append(attractionQt)
        attractionList.append(attractionUpgrade)
        attractionDiv.append(attractionList)
        //boxes right side
        //1
        // let box1 = document.createElement("div")
        // box1.innerText = "box1"
        // box1.setAttribute('class', 'attraction-div')
        // gC.append(box1)
        // //2
        // let box2 = document.createElement("div")
        // box2.innerText = "box2"
        // box2.setAttribute('class', 'attraction-div')
        // gC.append(box2)
        //3
        let box3 = document.createElement("div")
        box3.innerText = "box3"
        box3.setAttribute('class', 'attraction-div')
        gC.append(box3)
        //4
        let box4 = document.createElement("div")
        // box4.innerText = "box4"
        // box4.setAttribute('class', 'attraction-div')
        gC.append(box4)
        //5
        let box5 = document.createElement("div")
        box5.innerText = "box5"
        box5.setAttribute('class', 'attraction-div')
        gC.append(box5)
        //6
        let box6 = document.createElement("div")
        // box6.innerText = "box6"
        // box6.setAttribute('class', 'attraction-div')
        gC.append(box6)
        //7
        let box7 = document.createElement("div")
        box7.innerText = "box7"
        box7.setAttribute('class', 'attraction-div')
        gC.append(box7)
        //8
        let box8 = document.createElement("div")
        // box8.innerText = "box8"
        // box8.setAttribute('class', 'attraction-div')
        gC.append(box8)
        //9
        let box9 = document.createElement("div")
        box9.innerText = "box9"
        box9.setAttribute('class', 'attraction-div')
        gC.append(box9)
        //10
        let box10 = document.createElement("div")
        // box10.innerText = "box10"
        // box10.setAttribute('class', 'attraction-div')
        gC.append(box10)
      
        attractionDiv.append(attractionList)

    //append header, game Screen, Attractions, and footer
    document.body.append(header)
    gC.append(attractionDiv)
    document.body.append(gC)
    footer.append(btnDiv)
    document.body.append(footer)




    
    //append the gameScreen to the game Container
    // gC.append(gS)
    // document.body.append(gC)
    
    //add attractionList + footer to gameContainer
    // gC.append(attractionList)
    // gC.append(footer)

}