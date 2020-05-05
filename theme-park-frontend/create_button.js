let createButton = function(currentUser){
    
    //create a new button with the same id as the current user id
    fetch(`http://localhost:3000/buttons`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_id: currentUser.id,
            value: 1
        })
    })
    
    getButton(currentUser)
}
      