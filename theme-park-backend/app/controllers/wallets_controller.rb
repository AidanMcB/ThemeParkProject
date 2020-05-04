class WalletsController < ApplicationController

    def show
        wallet = Wallet.find(params[:id])
        render(json: wallet)
    end
    
end