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
            amount: params[:amount],
            price: params[:price]

        })
        render(json: attraction)
    end

    def create
        attraction = Attraction.create({
            user_id: params[:user_id][:id],
            name: params[:name],
            amount: params[:amount],
            revenue: params[:revenue],
            wait_time: params[:wait_time],
            price: params[:price]       
        })
        render(json: attraction)
    end

end