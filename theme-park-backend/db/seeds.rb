Wallet.destroy_all 
User.destroy_all
Button.destroy_all
ButtonUpgrade.destroy_all


testUser = User.create({user_name: "John Doe"})
testWallet = Wallet.create({money: 20.00, img_src: "none", user_id: 1})

Button.create({value: 1})

ButtonUpgrade.create({button_id: 1, name: "Your First Upgrade", flavor_text: "Congrats... You're now an idle pro", click_multiplier: 2})
