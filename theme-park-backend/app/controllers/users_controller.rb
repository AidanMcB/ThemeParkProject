class UsersController < ApplicationController

    def index 
        users = User.all 
        render(json: users)
    end

    def show 
        user = User.find(params[:id])
        render(json: user)
    end

    def new
        user = User.new
        render(json: user)
    end

    def create 
        user = User.create({
            user_name: params[:user_name]
        })
        session[:user_id] = user.id
        #consider adding validations
        # if(user.valid?){
        #     user.save
        render(json: user)
        # }
    end

end