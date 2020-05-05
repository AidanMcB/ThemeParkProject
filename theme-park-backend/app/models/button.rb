class Button < ApplicationRecord
    belongs_to :user
    has_many :button_upgrades
end