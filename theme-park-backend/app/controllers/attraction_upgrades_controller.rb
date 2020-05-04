class AttractionUpgradesController < ApplicationController

    def index
        attraction_upgrades = AttractionUpgrade.all 
        render(json: attraction_upgrades)
    end 

    def show 
        attraction_upgrade = AttractionUpgrade.find(params[:id])
        render(json: attraction_upgrade)
    end


end