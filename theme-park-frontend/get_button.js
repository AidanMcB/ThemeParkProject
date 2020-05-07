let getButton = function(currentUser){

    //accept button of the current user
    fetch(`http://localhost:3000/users`)
        .then(function(response){
            return response.json()
        })
        .then(function(users){
            let user = users.find( user => user.id == currentUser.id)
            //curent users wallet
            let wallet = user.wallet
            //current users button
            let button = user.button
            
            let btnDiv = document.createElement("div")
            btnDiv.setAttribute('class', 'btn-div')
            let btn = document.createElement("button")
            btn.innerText = "Click Me"
            btn.setAttribute('class', 'the-button')
            btn.setAttribute('id', button.id)
            btnDiv.append(btn)
            gC.append(btnDiv)

            //when the button is clicked
            btn.addEventListener('click', function(){
                    console.log(wallet.money)
                fetch(`http:localhost:3000/wallets/${wallet.id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        money: wallet.money += 1 
                        })
                    })
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(like){
                        let moneyDisplay = document.querySelector('.money-display')
                        moneyDisplay.innerText = `${wallet.money} dollars`

                    })

            })
        })
}
