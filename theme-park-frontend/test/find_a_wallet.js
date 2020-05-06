let currentWallet = {}
let findAWallet = function(currentUser){
    fetch(`http:localhost:3000/wallets`)
        .then(function(response){
            return response.json()
        })
        .then(function(wallets){
            
            //this find functino works and matches the user with the wallet
            currentWallet = wallets.find( wallet =>  wallet.user_id == currentUser.id)
             debugger
        })
        
       
}