class User < ApplicationRecord
    has_many :attractions
    # validates :user_name, presence: true {message: "Must have make username"}
    # validates :user_name, uniqueness: true {message: "This username already exists"}
end