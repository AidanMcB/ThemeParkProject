let userNow = {}

let createSignUp = function(){
    //main page div
    let signUpDiv = document.createElement("div")
    //title
    let title = document.createElement("h1")
    title.innerText = "Theme Park Simulator"
    //sign up input
    let signUp = document.createElement("input")
    let signUpBtn = document.createElement("button")
    signUpBtn.setAttribute('class', 'sign-up-button')
    signUpBtn.innerText = "Sign Up"
    signUp.setAttribute('class', 'sign-up-input')
    signUp.placeholder = "Enter a username"
    
    signUpDiv.append(title)
    signUpDiv.append(signUp)
    signUpDiv.append(signUpBtn)
    document.body.append(signUpDiv)

    signUpBtn.addEventListener('click', function(){
        //post the new user to users 
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
        //clear login page
        signUpDiv.innerText = ""
        //assign the empty object 'currentUser' to the 
        //newUser we created through input
            userNow = newUser
            let currentUser = newUser
        //creates a wallet when a user is created
        //wallet is tied to this use
            getWallet(currentUser)
        //creates a button when a user is created
        //button is tied to this user
            getButton(currentUser)
    })

})
}