


createSignUp()




let runGame = function(){
    
    let carosel_container = document.querySelectorAll('.attraction-div')[0]
    let gravitron_container = document.querySelectorAll('.attraction-div')[1]
    let waterslide_container = document.querySelectorAll('.attraction-div')[2]
    let droptower_container = document.querySelectorAll('.attraction-div')[3]
    let rollercoaster_container = document.querySelectorAll('.attraction-div')[4]



    renderAttractions()

    // attUpgrades()

    let five = async function(){
        addCaroselMoney()
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

    let carosel_button = document.createElement('button')

    carosel_button.append(`Purchase Carosel`)

    

    carosel_button.addEventListener("click", function(e){
        createCarosel()
    })

    // upgradeCarosel()

    
    carosel_container.append(carosel_button)

    // showCaroselAmount()

    setInterval(five,5000)
    setInterval(walletUpdate,30000)
}