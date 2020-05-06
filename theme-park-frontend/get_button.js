let getButton = function(currentUser){

    //accept button of the current user
    fetch(`http://localhost:3000/buttons`)
        .then(function(response){
            return response.json()
        })
        .then(function(buttons){
            let button = buttons.find( button => button.user_id == currentUser.id)
           
            let btn = document.createElement("button")
            btn.setAttribute('id', button.id)
            btn.innerText = "Click Me"
            document.body.append(btn)
            btn.setAttribute('class', 'the-button')

            //when the button is clicked
            btn.addEventListener('click', function(){
                
               //call find_a_wallet to select the appropriate wallet
                //wallet is currently undefined
                
              
            })
        })
}
