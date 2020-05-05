let theButton = function(){
    //button id currently hardcoded, needs to be updated to 
    //accept button of the current user
    fetch('http://localhost:3000/buttons/2')
        .then(function(response){
            return response.json()
        })
        .then(function(button){
            let btn = document.createElement("button")
            btn.innerText = button.value
            document.body.append(btn)
            btn.setAttribute('class', 'the-button')

            btn.addEventListener('click', function(){
                //update number on page
                btn.innerText = parseInt(btn.innerText) + 1 
                //update number on backend
                fetch(`http://localhost:3000/buttons/${button.id}`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        "value": button.value += 1
                    })
                })
                // .then(function(response){
                //     return response.json()
                // })
                // .then(function(btnClick){
                //     console.log(btnClick)
                // })
                
            })
        })
}