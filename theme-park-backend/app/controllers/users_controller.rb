class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users, include: [:wallet, :button, :attractions]
    end

    def show 
        user = User.find(params[:id])
        render(json: user)
    end

    def new
        user = User.new
        render(json: user)
    end


    # put the creation in here 
    def create 
        user = User.create({
            user_name: params[:user_name]
        })
        session[:user_id] = user.id 
            #create button when a user is created
            button = Button.create({
                user_id: user.id,
                value: 1
            })
            session[:button_id] = button.id
            #render(json: button)
             #create wallet when user is created
                wallet = Wallet.create({
                    user_id: user.id,
                    money: 0,
                    img_src: ""
                })
                session[:wallet_id] = wallet.id
                #render(json: wallet)               
        render(json: user)
    end

end