# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Button.destroy_all
ButtonUpgrade.destroy_all

Button.create({value: 1})

ButtonUpgrade.create({button_id: 1, name: "Your First Upgrade", flavor_text: "Congrats... You're now an idle pro", click_multiplier: 2})
