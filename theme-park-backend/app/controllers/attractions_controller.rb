class AttractionsController < ApplicationController

    def index
        attractions = Attraction.all 
        render(json: attractions)
    end

    def show
        attraction = Attraction.find(params[:id])
        render(json: attraction)
    end

    def update
        attraction = Attraction.find(params[:id])
        attraction.update({
            amount: params[:amount]
        })
        render(json: attraction)
    end

end