class ButtonsController < ApplicationController
    
        def index 
            buttons = Button.all 
            render(json: buttons)
        end

    def show 
        button = Button.find(params[:id])
        render(json: button)
    end

end