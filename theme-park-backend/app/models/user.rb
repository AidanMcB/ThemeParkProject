class User < ApplicationRecord
    has_many :attractions
    has_one :button 
    has_one :wallet
    has_many :attraction_upgrades, through: :attractions 
    has_many :button_upgrades, through: :button
    
    # validates :user_name, presence: true {message: "Must have make username"}
    # validates :user_name, uniqueness: true {message: "This username already exists"}
end