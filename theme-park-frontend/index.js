


createSignUp()




let runGame = function(){
    
    let carosel_container = document.querySelectorAll('.attraction-div')[0]
    let gravitron_container = document.querySelectorAll('.attraction-div')[1]
    let waterslide_container = document.querySelectorAll('.attraction-div')[2]
    let droptower_container = document.querySelectorAll('.attraction-div')[4]
    droptower_container.setAttribute('class', 'messages')
    let rollercoaster_container = document.querySelectorAll('.attraction-div')[3]



    renderAttractions()

    // attUpgrades()

    let five = async function(){
        addCaroselMoney()
        addGravitronMoney()
        addWaterslideMoney()
        addrollercoasterMoney()
    }

    let walletUpdate = async function(){
        console.log("The money has been saved in the database")
        let moneyDisplay = document.querySelector('.money-display')
        let money = parseInt(moneyDisplay.innerHTML)
        updateWallet(currentUser, money)
    }


    //Attraction stuff to put on the page


    carosel_container.innerHTML = ''
    gravitron_container.innerHTML = ''
    waterslide_container.innerHTML = ''
    droptower_container.innerHTML = ''
    rollercoaster_container.innerHTML = ''

//CAROSEL
    let carosel_button = document.createElement('button')
    carosel_button.setAttribute('class', 'carosel-button')
    carosel_button.append(`Purchase Carosel`)
    //upgrade
    let car_upgrade_button = document.createElement('button')
    car_upgrade_button.setAttribute('class', 'car-upgrade-button')
    car_upgrade_button.append(`Upgrade Carosel`)

    

    carosel_button.addEventListener("click", function(e){
        droptower_container.innerHTML = "Woohoo! Hop on board the carousel!"
        createCarosel()
        
    })
    car_upgrade_button.addEventListener("click", function(e) {
        caroselUpgrade()

    })


    
    carosel_container.append(carosel_button)
    carosel_container.append(car_upgrade_button)

    // showCaroselAmount()
//GRAVITRON

let gravitron_button = document.createElement('button')
gravitron_button.setAttribute('class', 'gravitron-button')
gravitron_button.append(`Purchase Gravitron`)
    //upgrade
    let grav_upgrade_button = document.createElement('button')
    grav_upgrade_button.setAttribute('class', 'grav-upgrade-button')
    grav_upgrade_button.append(`Upgrade Gravitron`)



gravitron_button.addEventListener("click", function(e){
    createGravitron()
    droptower_container.innerHTML = "IT'S A UFO!"
    
})

grav_upgrade_button.addEventListener("click", function(e) {

    gravitronUpgrade()
})




gravitron_container.append(gravitron_button)
gravitron_container.append(grav_upgrade_button)

//WATERSLIDE

let waterslide_button = document.createElement('button')
waterslide_button.setAttribute('class', 'waterslide-button')
waterslide_button.append(`Purchase Waterslide`)
        //upgrade
        let water_upgrade_button = document.createElement('button')
        water_upgrade_button.setAttribute('class', 'water-upgrade-button')
        water_upgrade_button.append(`Upgrade Waterslide`)


waterslide_button.addEventListener("click", function(e){
    droptower_container.innerHTML = "Why a waterslide? Shut up that's why..."
    createwaterslide()
    
})

water_upgrade_button.addEventListener("click", function(e) {

    waterslideUpgrade()

})



waterslide_container.append(waterslide_button)
waterslide_container.append(water_upgrade_button)

//ROLLERCOASTER

let rollercoaster_button = document.createElement('button')
rollercoaster_button.setAttribute('class', 'rollercoaster-button')
rollercoaster_button.append(`Purchase Rollercoaster`)
    //upgrade
    let roll_upgrade_button = document.createElement('button')
    roll_upgrade_button.setAttribute('class', 'roll-upgrade-button')
    roll_upgrade_button.append(`Upgrade Rollercoaster`)


rollercoaster_button.addEventListener("click", function(e){
    
    createRollercoaster()
    droptower_container.innerHTML = "Even has the loopdey loop!"
})

roll_upgrade_button.addEventListener("click", function(e){

    rollercoasterUpgrade()

})



rollercoaster_container.append(rollercoaster_button)
rollercoaster_container.append(roll_upgrade_button)

    setInterval(five,5000)

    setInterval(walletUpdate,30000)
}