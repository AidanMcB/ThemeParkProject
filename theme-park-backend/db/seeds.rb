Wallet.destroy_all 
User.destroy_all
testUser = User.create({user_name: "John Doe"})
testWallet = Wallet.create({money: 20.00, img_src: "none", user_id: 1})