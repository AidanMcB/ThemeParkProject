let userNow = {}
let currentUser = {}
let userCheck = ""

let createSignUp = function(){
    
     //create sign In div
     let signInDiv = document.createElement("div")
     signInDiv.setAttribute('class', 'sign-in-div')
    let docBody = document.querySelector("body")
    
    //main page div
    let signUpDiv = document.createElement("div")
    signUpDiv.setAttribute('class', 'sign-up-div')
    //title
    let title = document.createElement("h1")
    title.innerText = "Monstar Park Idle"
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

       

        let or = document.createElement("p")
        or.setAttribute('class', 'or')
        or.innerText = "or"
        signInDiv.append(or)
        
        let userSelection = document.createElement("select")
        userSelection.id = "userIdSelection"
        signInDiv.append(userSelection)

        for(let i = 0; i < array.length; i++){
            let option = document.createElement("option")
            option.value = array[i].id
            option.text = array[i].user_name
            userSelection.appendChild(option)
        }
        
        //selection options button
        let signInBtn = document.createElement("button")
        signInBtn.setAttribute('class','sign-in-button')
        signInBtn.innerText = "Sign In"
        signInDiv.append(signInBtn)
        document.body.append(signInDiv)
        
        signInBtn.addEventListener('click', function(){
            currentUserId = userSelection.options[userSelection.selectedIndex].value
            currentUser = users.find(user => user.id == currentUserId)
            signInDiv.innerText = ""
            signUpDiv.innerText = ""
            
            getWallet(currentUser)
            getButton(currentUser)
            getPage(currentUser)

        })
    })
        
    signUpBtn.addEventListener('click', function(){
        
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
        signInDiv.innerText = ""
        signUpDiv.innerText = ""
        
        //add navbar back
   
        
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
        getPage(currentUser)
     

    })
        // }//ends else statement
    })
    
}