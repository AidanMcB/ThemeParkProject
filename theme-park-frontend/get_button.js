let btnDiv = document.createElement("div")
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
            console.log(user.wallet)
            //current users button
            let button = user.button
            
            btnDiv.setAttribute('class', 'btn-div')
            let btn = document.createElement("button")
            btn.innerText = "Click Me"
            btn.setAttribute('class', 'the-button')
            btn.setAttribute('id', button.id)
            btnDiv.append(btn)
            

            //when the button is clicked
            btn.addEventListener('click', function(){
                console.log("This button has been clicked")
                addToWallet(currentUser,button.value)
                // updateWallet(currentUser,button.value)

            })
        })
}
