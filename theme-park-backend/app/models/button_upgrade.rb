class ButtonUpgrade < ApplicationRecord
    belongs_to :button
    has_many :button_upgrades
end