class ButtonUpgradesController < ApplicationController

    def index 
        button_upgrades = ButtonUpgrade.all 
        render(json: button_upgrades)
    end

    def show 
        button_upgrade = ButtonUpgrade.find(params[:id])
        render(json: button_upgrade)
    end 
    
end