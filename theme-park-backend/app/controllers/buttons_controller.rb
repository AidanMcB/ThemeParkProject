class ButtonsController < ApplicationController
    
    def index 
        buttons = Button.all             
        render(json: buttons)
    end

    def show 
        button = Button.find(params[:id])
        render(json: button)
    end

    def update 
        button = Button.find(params[:id])
        button.update({value: params[:value]})
        render(json: button)
    end

    def new
        button = Button.new
        render(json: button)
    end

    def create 
        # byebug
        button = Button.create({
            user_id: params[:user_id],
            value: params[:value]
        })
        session[:button_id] = button.id
        render(json: button)
    end

end