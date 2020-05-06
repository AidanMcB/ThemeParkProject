class WalletsController < ApplicationController

    def index
        wallets = Wallet.all 
        render(json: wallets)
    end
    
    def show
        wallet = Wallet.find(params[:id])
        render(json: wallet)
    end

    def update
        wallet = Wallet.find(params[:id])
        wallet.update({
            money: params[:money]
        })
        render(json:wallet)
    end


    def new
        wallet = Wallet.new
        render(json: wallet)
    end

    def create 
        # byebug
        wallet = Wallet.create({
            user_id: params[:user_id],
            money: params[:money],
            img_src: params[:img_src]
        })
        session[:wallet_id] = wallet.id
        render(json: wallet)
    end                   

end