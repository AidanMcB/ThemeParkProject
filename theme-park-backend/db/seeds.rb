Wallet.destroy_all 
User.destroy_all
Button.destroy_all
ButtonUpgrade.destroy_all


<<<<<<< HEAD
testUser = User.create({user_name: "John Doe"})
testWallet = Wallet.create({money: 20.00, img_src: "none", user_id: 1})

Button.create({value: 1})

ButtonUpgrade.create({button_id: 1, name: "Your First Upgrade", flavor_text: "Congrats... You're now an idle pro", click_multiplier: 2})
=======
ButtonUpgrade.create({button_id: 1, name: "Your First Upgrade", flavor_text: "Congrats... You're now an idle pro", click_multiplier: 2})


testUser = User.create({user_name: "John Doe"})
testWallet = Wallet.create({money: 20.00, img_src: "none", user_id: 1})

>>>>>>> 97b8cd18db40119c9eb6c03161fcf50fa0577b7c
