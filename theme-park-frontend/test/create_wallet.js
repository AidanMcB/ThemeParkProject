//possibly an uneccessary file
// let createWallet = function(currentUser){

//     //print the current user id
//     //console.log(`currentUser.id = ${currentUser.id}`)

//     //create a new wallet with the same ID as the user ID
//     fetch(`http://localhost:3000/wallets`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             user_id: currentUser.id,
//             money: 0,
//             img_src: "https://media.eurekalert.org/multimedia_prod/pub/web/211401_web.jpg"
//         })
//     })
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(newWallet){
//         // fetch(`http://lochalhost:3000/users`)
//         //     .then(function(response){
//         //         return response.json()
//         //     })
//         //     .then(function(users){
//         //         let user = users.find(user => user)
//         //     })
//         getWallet(currentUser)
//     })
    
// }