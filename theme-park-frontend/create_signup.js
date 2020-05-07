let userNow = {}
let currentUser = {}
let userCheck = ""

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

    //get users check if input name already exists
    fetch(`http://localhost:3000/users`)
    .then(function(response){
        return response.json()
    })
    .then(function(users){
        
        // userCheck = users.find(user => user.user_name == signUp.value)
        
        // if(userCheck != undefined){
            //     let errorMessage = document.createElement("p")
            //     errorMessage.setAttribute('class', 'error-message')
            //     errorMessage.innerText = "This User Already Exists"
            //     document.body.append(errorMessage)
            // }
                //or sign in
        let array = users

        //create sign In div
        let signIn = document.createElement("div")
        signIn.setAttribute('class', 'sign-in')

        let or = document.createElement("p")
        or.innerText = "or"
        signIn.append(or)
        
        let userSelection = document.createElement("select")
        userSelection.id = "userIdSelection"
        signIn.append(userSelection)

        for(let i = 0; i < array.length; i++){
            let option = document.createElement("option")
            option.value = array[i]
            option.text = array[i].user_name
            userSelection.appendChild(option)
        }
        
        //selection options button
        let signInBtn = document.createElement("button")
        signInBtn.innerText = "Sign In"
        signIn.append(signInBtn)
        document.body.append(signIn)
        
        signInBtn.addEventListener('click', function(){
            currentUser = userSelection.options[userSelection.selectedIndex].value
            //consider debugger
            

        })
    })
        
    signUpBtn.addEventListener('click', function(){
        
                // if(){

        // }
        // else{
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
        currentUser = newUser
            // let currentUser = newUser
        //creates a wallet when a user is created
        //wallet is tied to this use
        getWallet(currentUser)
        //creates a button when a user is created
        //button is tied to this user
        getButton(currentUser)
        getPage()

    })
        // }//ends else statement
    })
    
}