class Attraction < ApplicationRecord
    belongs_to :user
    has_many :attraction_upgrades
end