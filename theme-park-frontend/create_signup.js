let currentUser = {}
let createSignUp = function(){
    
    let title = document.createElement("h1")
    title.innerText = "Theme Park Simulator"
    //sign in input
    let signUp = document.createElement("input")
    let signUpBtn = document.createElement("button")
    signUpBtn.setAttribute('class', 'sign-up-button')
    signUpBtn.innerText = "Sign Up"
    signUp.setAttribute('class', 'sign-up-input')
    signUp.placeholder = "Enter a username"
    
    document.body.append(title)
    document.body.append(signUp)
    document.body.append(signUpBtn)

    signUpBtn.addEventListener('click', function(){
        //console.log(signUp.value)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_name: signUp.value
            })
        })
    .then(function(response){
        return response.json()
    })
    .then(function(newUser){
        
        currentUser = newUser
        console.log(currentUser)
        createWallet(currentUser)
        createButton(currentUser)
    })

})

//current user variable default set to empty no one logged in 
//fetch request to users, retrive user who matches user_name
//automatically assings that user_name to current_user
//validations for no two users 
//
}