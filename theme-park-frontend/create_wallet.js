let createWallet = function(currentUser){
    console.log(currentUser.id)
    //create a new wallet with the same ID as the user ID
    fetch(`http://localhost:3000/wallets`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_id: currentUser.id,
            money: 0,
            img_src: "https://media.eurekalert.org/multimedia_prod/pub/web/211401_web.jpg"
        })
    })
    getWallet(currentUser)
}