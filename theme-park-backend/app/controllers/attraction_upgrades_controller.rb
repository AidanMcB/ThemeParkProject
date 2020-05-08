class AttractionUpgradesController < ApplicationController

    def index
        attraction_upgrades = AttractionUpgrade.all 
        render(json: attraction_upgrades)
    end 

    def show 
        attraction_upgrade = AttractionUpgrade.find(params[:id])
        render(json: attraction_upgrade)
    end

    def create
        attraction_upgrade = AttractionUpgrade.create({
            name: params[:name],
            flavor_text: params[:flavor_text],
            revenue_multiplier: params[:revenue_multiplier],
            user_id: params[:user_id],
            purchased?: params[:purchased?],
            price: params[:price]
        })
        render(json: attraction_upgrade)
    end

    def update
        attraction = AttractionUpgrade.find(params[:id])
        attraction.update({
            purchased?: params[:purchased?]
        })
    end

end