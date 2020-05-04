Wallet.destroy_all 
User.destroy_all
Button.destroy_all
ButtonUpgrade.destroy_all
Attraction.destroy_all
AttractionUpgrade.destroy_all

the_button = Button.create({value: 1})
ButtonUpgrade.create({button_id: the_button.id, name: "Your First Upgrade", flavor_text: "Baby's First Steps", click_multiplier: 2,price: 30})


testUser = User.create({user_name: "John Doe"})
testWallet = Wallet.create({money: 20.00, img_src: "none", user_id: testUser.id})

carosel = Attraction.create({name: "Carosel", amount: 0, revenue: 5, wait_time: 10, img_source: "none"})
AttractionUpgrade.create({name: "Your Second Upgrade", flavor_text: "Congrats! You're an Idling Pro... A Professional Time Waster", price: 100, revenue_multiplier: 1.5, purchased?: false, attraction_id: carosel.id })
