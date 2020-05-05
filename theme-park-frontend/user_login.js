let createLoginPage = function(){
    //document.body.innerText = ""
    let title = document.createElement("h1")
    title.innerText = "Theme Park Simulator"
    //sign in input
    let signIn = document.createElement("input")
    let signInBtn = document.createElement("button")
    signInBtn.setAttribute('class', 'sign-in-button')
    signIn.setAttribute('class', 'sign-in-input')
    signIn.placeholder = "Enter a username"
    
    document.body.append(title)
    document.body.append(signIn)
    document.body.append(signInBtn)

    signInBtn.addEventListener('click', function(){

    fetch('http://localhost:3000/users', {
        method: 'POST',
        head: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "user_name": `${signIn.value}`
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(newUser){
        console.log(newUser)
    })

})

}